import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from '../../../core/block';
import {Props} from '../../../core/types';

interface IMessageOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export default class Message extends Block {
  constructor(props: IMessageOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, { noEscape: true })(this.props);
  }
}
