import {compile} from "handlebars";
import {tmp} from "./index.tpl";

interface IChat {
  tape: [];
}

function board() {
  const compiler = compile(tmp);
  return function(context: IChat) {
    return compiler(context)
  }
}

export default board;