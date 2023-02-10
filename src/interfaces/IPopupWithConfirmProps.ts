import { IProps } from './IProps';

export interface IPopupWithConfirmProps extends IProps {
  title: string,
  buttonText: string,
  card: Chat | null,
  onSubmit: (evt: Chat | null) => void,
}
