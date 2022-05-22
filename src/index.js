import { SELECTORS } from "./utils/config";
import render from "./utils/render";
import Popup from "./utils/popup";
import redirect from "./utils/redirect";

render();

const popup = new Popup(SELECTORS);
popup.initPopups();

redirect();
