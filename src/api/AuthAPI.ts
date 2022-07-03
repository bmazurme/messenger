import HTTP, {Options} from '../utils/http';
import {BaseAPI} from './BaseAPI';
import { BASE_URL } from '../utils/constants';

const authAPIInstance = new HTTP(`${BASE_URL}/auth`);

class AuthAPI extends BaseAPI {
  userInfo() {
    return authAPIInstance.get('/user');
  }
  signUp(options: Options) {
    return authAPIInstance.post('/signup', options);
  }
  signIn(options: Options) {
    return authAPIInstance.post('/signin', options);
  }
  logOut() {
    return authAPIInstance.post('/logout');
  }
}

export const auth = new AuthAPI();
