import Block from '../../../core/block';
import {IBoxOptions} from './options';

export default class Box extends Block {
  constructor(props: IBoxOptions) {
    super(props,);
    this.props = props;
  }

  public render() {
    const {components} = this.props;
    return components.render();
  }
}
