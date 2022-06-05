import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from '../../../core/block';
import { IErrorOptions } from "./options";

export default class Error extends Block {
  constructor(props: IErrorOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}