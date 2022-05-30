import {compile} from "handlebars";
import {tmp} from "./index.tpl";

interface ISignin {
  login: string;
  password: string;
}

function signin() {
  const compiler = compile(tmp);
  return function(context: ISignin) {
    return compiler(context);
  }
}

export default signin;
