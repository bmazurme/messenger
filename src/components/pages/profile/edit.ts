import {compile} from "handlebars";
import {tmp} from "./edit.tpl";
import Block from '../../../core/block';
import {Props} from '../../../core/types';

interface IProfileEditOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export default class ProfileEdit extends Block {
  constructor(props: IProfileEditOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
