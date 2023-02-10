type Action<T> = {
  type: string;
  payload: T;
};

type Reducer<T> = (state: T, action: Action<T>) => T;

type User = {
  _id: string;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  phone: string;
  avatar: string;
  email: string;
  password: string;
};

// type Like = {
//   _id: string,
//   user: User | null,
// }

type Chat = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: string | null;
  title: string;
  unread_count: number;
  // id: number;
  // title: string;
  // text: string;
  // image: string;
  // time: Date;
  // count: number;
  // you: boolean;
}
