import IOptions from './IOptions';
type PlainObject<T = unknown> = {
  // eslint-disable-next-line no-unused-vars
  [k in string]: T;
};

export function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

export function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

export function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

function getKey(key: string, parentKey?: string) {
  return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data: PlainObject | [], parentKey?: string) {
  const result: [string, string][] = [];

  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }
  return result;
}

export function queryString(data: PlainObject | unknown) {
  if (!isPlainObject(data)) {
    throw new Error('input must be an object');
  }
  return getParams(data).map(arr => arr.join('=')).join('&');
}

const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
};

class HTTPTransport {
  baseURL: string;
  constructor(baseURL: string = '') {
    this.baseURL = baseURL;
  }
  get = (url: string, options?: IOptions) => {
    return options ? this.request(this.baseURL + url + queryString(options!.data), {
      ...options, method: METHODS.GET 
    }, options!.timeout)
    : this.request(this.baseURL + url, {method: METHODS.GET});
  };
  put = (url: string, options: IOptions = {}) => {
    return this.request(this.baseURL + url, {
      ...options, method: METHODS.PUT
    }, options.timeout);
  };
  post = (url: string, options: IOptions = {}) => {
    console.log(this.baseURL + url);
    return this.request(this.baseURL + url, {
      ...options, method: METHODS.POST
    }, options.timeout);
  };

  delete = (url: string, options: IOptions) => {
    return this.request(this.baseURL + url, {
      ...options, method: METHODS.DELETE
    }, options.timeout);
  };

  request = (url: string, options: IOptions = {}, timeout: number | unknown = 5000) => {
    const {method, data, headers} = options;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        if (typeof method === 'string') {
            xhr.open(method, url);
        }
        if (isPlainObject(headers)) {
          Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, <string>headers[key]);
          });
        } else {
          xhr.setRequestHeader('content-type', 'application/json')
        }
        if (typeof timeout === 'number') {
          xhr.timeout = timeout;
        }
        xhr.onload = function () {
          resolve(xhr);
        };
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
        xhr.withCredentials = true;

        if (method === METHODS.GET || !data) {
          xhr.send();
        } else if (!headers) {
          xhr.send(JSON.stringify(data));
        } else {
          xhr.send(data);
        }
    });
  };
}

export default HTTPTransport;
