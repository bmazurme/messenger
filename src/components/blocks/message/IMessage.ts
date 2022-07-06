export interface IMessage {
  time: string,
  incoming: boolean,
  content: string,
  file: string | null,
  fromYou: boolean
}
