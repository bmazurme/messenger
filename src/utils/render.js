import { routes } from "../data/routes";
import { ERROR_NOT_FOUND } from "../data/const";

function generateBlock({ view, context }) {
  const block = view();
  return block(context);
}

function render() {
  const url = window.location.pathname;
  const tmp = routes.get(routes.has(url) ? url : ERROR_NOT_FOUND);
  const root = document.getElementById('root');
  root.innerHTML = generateBlock(tmp);
}

export default render;