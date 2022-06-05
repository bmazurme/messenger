import { compile } from "handlebars";
import { tmp } from "./index.tpl";
import Block from '../../../core/block';
import { ISignupOptions } from "./options";

export default class Signup extends Block {
  constructor(props: ISignupOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
