import Block from "../../../core/block";
import {compile} from "handlebars";
import { tmp } from "./index.tpl";
import {Props} from '../../../core/types';

interface IWrapperOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export default class Wrapper extends Block {
  constructor(props: IWrapperOptions) {
    super(props);
    this.props = props;
  }
  public render() {
    return compile(tmp, 
    { noEscape: true })(this.props);
  }
}
