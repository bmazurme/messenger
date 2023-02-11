import HTTP, { Options } from '../utils/http';
import { Urls } from '../utils/constants';

const usersAPIInstance = new HTTP(`${Urls.BASE.INDEX}/user`);

class UsersAPI {
  changeInfo(options: Options) {
    return usersAPIInstance.put('/profile', options);
  }
  changePassword(options: Options) {
    return usersAPIInstance.put('/password', options);
  }
  changeAvatar(options: Options) {
    return usersAPIInstance.put('/profile/avatar', options);
  }
  searchByLogin(options: Options) {
    return usersAPIInstance.post('/search', options);
  }
}

export const users = new UsersAPI();
