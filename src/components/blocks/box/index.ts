import Block from "../../../core/block";
import {Props} from '../../../core/types';

interface IBoxOptions extends Props {
	type?: string;
	text?: string;
	class?: string;
}

export default class Box extends Block {
  constructor(props: IBoxOptions) {
    super(props,);
    this.props = props;
  }
  public render() {
    const { components } = this.props;
    return components.render();
  }
}
