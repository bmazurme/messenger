import Handlebars from "handlebars";
import { tmp } from "./edit-pass.tpl";

function profileEditPass() {
  const compiler = Handlebars.compile(tmp);
  return function(context) {
    return compiler(context);
  }
}

export default profileEditPass;