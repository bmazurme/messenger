import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from '../../../core/block';
import { IProfileOptions } from "./options";

export default class Profile extends Block {
  constructor(props: IProfileOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
