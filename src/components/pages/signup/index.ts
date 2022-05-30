import {compile} from "handlebars";
import {tmp} from "./index.tpl";

interface ISignup {
  email: string;
  login: string;
  firstName: string;
  secondName: string;
  phone: string;
  password: string;
}

function signup() {
  const compiler = compile(tmp);
  return function(context: ISignup) {
    return compiler(context);
  }
}

export default signup;
