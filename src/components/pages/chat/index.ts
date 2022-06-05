import Block from "../../../core/block";
import {compile} from "handlebars";
import { tmp } from "./index.tpl";
import { IChatOptions } from "./options";

export default class Chat extends Block {
  constructor(props: IChatOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}