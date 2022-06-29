import BaseAPI from './BaseAPI';
import HTTP from '../utils/http';
import IOptions from 'utils/IOptions';
import { BASE_URL } from '../data/const';

const AUTH_URL = `${BASE_URL}/auth`;
const authApi = new HTTP(AUTH_URL);

class AuthAPI extends BaseAPI {
  async userInfo() {
    return authApi.get('/user');
  }
  signUp(options: IOptions) {
    return authApi.post('/signup', options);
  }
  signIn(options: IOptions) {
    return authApi.post('/signin', options);
  }
  logOut() {
    return authApi.post('/logout');
  }
}
export const auth = new AuthAPI();
 
