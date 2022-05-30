import {compile} from "handlebars";
import {tmp} from "./index.tpl";

interface IChat {
  tape: [];
}

function chat() {
  const compiler = compile(tmp);
  return function(context: IChat) {
    return compiler(context);
  }
}

export default chat;