import BaseAPI from './BaseAPI';
import HTTP from '../utils/http';
import IOptions from 'utils/IOptions';
import { BASE_URL } from '../data/const';

const USER_URL = `${BASE_URL}/user`;
const usersAPIInstance = new HTTP(USER_URL);

class UsersAPI extends BaseAPI {
  changeInfo(options: IOptions) {
    return usersAPIInstance.put('/profile', options);
  }
  changePassword(options: IOptions) {
    return usersAPIInstance.put('/password', options);
  }
  changeAvatar(options: IOptions) {
    return usersAPIInstance.put('/profile/avatar', options);
  }
  searchByLogin(options: IOptions) {
    return usersAPIInstance.post('/search', options);
  }
}

export const users = new UsersAPI();
