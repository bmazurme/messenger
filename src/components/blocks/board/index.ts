import {compile} from "handlebars";
import {tmp} from "./index.tpl";
import Block from "../../../core/block";
import {Props} from '../../../core/types';

interface IBoardOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export default class Board extends Block {
  constructor(props: IBoardOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
