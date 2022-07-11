export interface ICard {
  id: number,
  avatar: string|null,
  title: string,
  last_message: {},
  unread_count: number,
  created_by: number,
  fromYou: boolean
};
