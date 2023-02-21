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

type MessageType = {
  chat_id: number;
  content: string;
  file: Record<string, string | number> | null;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
}

type Chat = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: {
    content: string;
    id: number;
    time: string;
    user: User;
  } | null;
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
