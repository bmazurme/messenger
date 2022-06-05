import Block from "../../../core/block";
import {compile} from "handlebars";
import { tmp } from "./index.tpl";
import { IPopupOptions } from "./options";

export default class Popup extends Block {
  constructor(props: IPopupOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
