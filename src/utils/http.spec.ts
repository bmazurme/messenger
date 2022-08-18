import HTTPTransport from './http';
import { expect } from 'chai';

global.XMLHttpRequest = require('xhr2');

describe('HTTPTransport', () => {
  const base = 'http://httpbin.org/';
  const httpInit = new HTTPTransport(base);

  it('Should perform GET request', async () => {
    const result: any = await httpInit.get('/get');
    expect(result.statusText).equals('OK');
  });
  it('Should perform POST request', async () => {
    const result: any = await httpInit.post('/post');
    expect(result.statusText).equals('OK');
  });
  it('Should perform PUT request', async () => {
    const result: any = await httpInit.put('/put');
    expect(result.statusText).equals('OK');
  });
  it('Should perform DELETE request', async () => {
    const result: any = await httpInit.delete('/delete', {});
    expect(result.statusText).equals('OK');
  });
});
