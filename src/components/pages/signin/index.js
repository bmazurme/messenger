import Handlebars from "handlebars";
import { tmp } from "./index.tpl";

function signin() {
  const compiler = Handlebars.compile(tmp);
  return function(context) {
    return compiler(context);
  }
}

export default signin;
