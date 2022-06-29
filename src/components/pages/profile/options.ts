import {Props} from '../../../core/types';

export interface IProfileOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export interface IUser {
  avatar?: string;
  display_name?: string;
  email?: string;
  first_name?: string;
  id?: number;
  login?: string;
  phone?: string;
  second_name?: string;
}