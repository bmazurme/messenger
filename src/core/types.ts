import Block from './block';

type ElementEvent = {
	id: string;
	// eslint-disable-next-line no-unused-vars
	fn: (event: Event) => void;
};

export type Events = Record<string, ElementEvent[]>;
export type Children = Record<string, InstanceType<typeof Block>>;
export type Props = {
	[key: string]: any;
	events?: Events;
	children?: Children;
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