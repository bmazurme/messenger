import HTTP, { Options } from '../utils/http';
import { Urls } from '../utils/constants';

const authAPIInstance = new HTTP(`${Urls.BASE.INDEX}/auth`);

class AuthAPI {
  getUser(): Promise<unknown> {
    return authAPIInstance.get('/user');
  }

  signUp(options: Options): Promise<unknown> {
    return authAPIInstance.post('/signup', options);
  }

  signIn(options: Options): Promise<unknown> {
    return authAPIInstance.post('/signin', options);
  }

  logOut(): Promise<unknown> {
    return authAPIInstance.post('/logout');
  }
}

export const auth = new AuthAPI();
