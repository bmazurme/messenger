import { SELECTORS } from '../utils/config';
import Popup from '../utils/popup';

export default function handlerPopupClick(element: HTMLElement) {
  const popup = new Popup(SELECTORS);
  popup.initPopups(element);
}