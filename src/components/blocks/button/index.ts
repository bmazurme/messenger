import {compile} from "handlebars";
import {tmp} from "./index.tpl";

interface IButton {
  name: string;
}

function button() {
  const compiler = compile(tmp)
  
  return function(context: IButton) {
    return compiler(context);
  }
}

export default button;