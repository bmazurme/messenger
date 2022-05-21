import { SELECTORS } from "./utils/config";
import render from "./utils/render";
import Popup from "./utils/popup";

render();

const popup = new Popup(SELECTORS);
popup.initPopups();
