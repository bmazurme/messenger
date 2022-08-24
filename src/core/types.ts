import Block from './block';

type ElementEvent = {
	id: string;
	// eslint-disable-next-line no-unused-vars
	fn: (event: Event) => void;
};

export type Events = Record<string, ElementEvent[]>;
export type Children = Record<string, InstanceType<typeof Block>>;
export type Props = {
	[key: string]: string;
	events: any;
	children: any;
};

/* eslint-disable no-unused-vars */
export enum ValidationType {
  login = 'login',
  name = 'name',
  password = 'password',
  email = 'email',
  phone = 'phone',
	message = 'message',
}

export enum ActionTypes {
  GET_CURRENT_USER = 'get_current_user',
  LOGOUT = 'logout',
  GET_CHATS = 'chats',
  GET_CHAT_TOKEN = 'get_chat_token',
  GET_CHAT_MESSAGES = 'get_chat_messages',
  GET_CHAT_ID = 'get_chat_id'
}
