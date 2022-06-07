import {ERROR_NOT_FOUND} from '../data/const';
import {routes} from '../data/routes';

export default function router() {
  const url = window.location.pathname;
  const {block} = routes.get(routes.has(url) ? url : ERROR_NOT_FOUND);
  return block;
}