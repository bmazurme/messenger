import {tmp} from './index.tpl';
import Block from '../../../core/block';
import {IProfileOptions, IUser} from './options';
import Field from '../../../components/blocks/field';
import Popup from '../../../components/blocks/popup';
import {auth} from '../../../api/AuthAPI';

export default class Profile extends Block {
  constructor(props: IProfileOptions = {}) {
    super(props);
    this.props = props;
    this.tmp = tmp;
  }
  _buildProps(json: any) {  
    const _props = {
      avatarLink: {
        label: 'Ава', 
        value: json.avatar || '0',
      },
      field: [
        new Field({
          label: 'Почта', 
          value: json.email || '1',
        }).render(),
        new Field({
          label: 'Логин', 
          value: json.login || '2',
        }).render(),
        new Field({
          label: 'Имя', 
          value: json.first_name || '3',
        }).render(),
        new Field({
          label: 'Фамилия', 
          value: json.second_name || '4',
        }).render(),
        new Field({
          label: 'Имя в чате', 
          value: json.display_name || '5',
        }).render(),
        new Field({
          label: 'Телефон', 
          value: json.phone || '6',
        }).render(),
      ].join(''),
      popup: new Popup({}).render(),
    };
    return _props;
  }

  componentDidMount() {
    auth
      .userInfo()
      .then(result => {
        const response: any = result.response;
        const json: IUser = JSON.parse(response);
        const {
          avatar,
          display_name,
          email,
          first_name,
          login,
          phone,
          second_name,
        } = json;
        console.log({
          avatar,
          display_name,
          email,
          first_name,
          login,
          phone,
          second_name,
        });
        const scheme: any = this._buildProps({
          avatar,
          display_name,
          email,
          first_name,
          login,
          phone,
          second_name,
        });
        console.log(scheme);
        this.setProps(scheme);
      }
    )
    .then(x => console.log(x))
    .catch((err) => console.log(err));
  }
  render() {
    return super.render();
  }
}

export const profileContext = new Profile({});
