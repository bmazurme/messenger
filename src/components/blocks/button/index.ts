import {compile} from 'handlebars';
import {tmp} from "./index.tpl";
import Block from '../../../core/block';
import { IButtonOptions } from './options';

export default class Button extends Block {
  constructor(props: IButtonOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
