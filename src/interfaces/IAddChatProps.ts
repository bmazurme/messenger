import { IProps } from './IProps';

export interface IAddChatProps extends IProps {
  onAddChat: (data: Record<string, string>) => void,
}
