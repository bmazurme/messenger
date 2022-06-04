import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from '../../../core/block';
import {Props} from '../../../core/types';

interface ICardOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export default class Card extends Block {
  constructor(props: ICardOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, { noEscape: true })(this.props);
  }
}
