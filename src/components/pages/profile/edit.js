import Handlebars from "handlebars";
import { tmp } from "./edit.tpl";

function profileEdit() {
  const compiler = Handlebars.compile(tmp);
  return function(context) {
    return compiler(context);
  }
}

export default profileEdit;