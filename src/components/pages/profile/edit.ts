import {compile} from "handlebars";
import {tmp} from "./edit.tpl";

interface IProfile {
  avatarLink: {label: string, value: string}
  displayName: {label: string, value: string}
  email: {label: string, value: string}
  firstName: {label: string, value: string}
  login: {label: string, value: string}
  phone: {label: string, value: string}
  secondName: {label: string, value: string}
}

function profileEdit() {
  const compiler = compile(tmp);
  return function(context: IProfile) {
    return compiler(context);
  }
}

export default profileEdit;