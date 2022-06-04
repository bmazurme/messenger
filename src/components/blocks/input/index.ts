import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from "../../../core/block";
import { IInputOptions } from "./options";

export default class Input extends Block {
  constructor(props: IInputOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
