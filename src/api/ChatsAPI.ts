import HTTP, {Options} from '../utils/http';
import { Urls } from '../utils/constants';

const chatAPIInstance = new HTTP(`${Urls.BASE.INDEX}/chats`);

class ChatsAPI {
  createChat(options: Options) {
    return chatAPIInstance.post('/', options);
  }

  getChats() {
    return chatAPIInstance.get('/');
  }

  addUsers(options: Options) {
    return chatAPIInstance.put('/users', options);
  }

  deleteUsers(options: Options) {
    return chatAPIInstance.delete('/users', options);
  }

  getChatToken(id: string) {
    return chatAPIInstance.post(`/token/${id}`);
  }
}

export const chats = new ChatsAPI();
