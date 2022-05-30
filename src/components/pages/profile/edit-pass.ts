import {compile} from "handlebars";
import {tmp} from "./edit-pass.tpl";

interface IPass {
  avatarLink: {label: string, value: string}
  newPassword: {label: string, value: string}
  newPasswordConfirm: {label: string, value: string}
  oldPassword: {label: string, value: string}
}

function profileEditPass() {
  const compiler = compile(tmp);
  return function(context: IPass) {
    console.log(context)
    return compiler(context);
  }
}

export default profileEditPass;