import {compile} from "handlebars";
import {tmp} from "./index.tpl";

interface IError {
  code: Number;
  link: string;
  text: string;
}

function error() {
  const compiler = compile(tmp);
  return function(context: IError) {
    return compiler(context);
  }
}

export default error;