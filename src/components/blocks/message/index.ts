import {compile} from "handlebars";
import {tmp} from "./index.tpl";

export interface ICard {
  image: string;
  title: string;
  text: string;
  time: string;
  counter: Number;
}

export function message() {
  const compiler = compile(tmp);
  return function(context: ICard) {
    return compiler(context);
  }
}

export default message;
