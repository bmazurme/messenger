import Handlebars from "handlebars";
import { tmp } from "./template";

function profile() {
  compiler = Handlebars.compile(tmp)
  return function(context) {
    return compiler(context);
  }
}

export default profile;