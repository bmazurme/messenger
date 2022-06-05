import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from '../../../core/block';
import { IFieldOptions } from "./options";

export default class Field extends Block {
  constructor(props: IFieldOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
