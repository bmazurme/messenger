import { routes } from "../data/routes";
import { ERROR_NOT_FOUND } from "../data/const";

interface ITmp {
  view: Function;
  context: {};
}

function generateBlock(tmp: ITmp) {
  const data = tmp.context;
  const context: {} = Array.isArray(data) 
    ? {[tmp.view.name]: data.map(item => generateBlock(item))} 
    : data;
    const block = tmp.view();
  return block(context);
}

function render() {
  const url = window.location.pathname;
  const tmp = routes.get(routes.has(url) ? url : ERROR_NOT_FOUND);
  const root = document.getElementById('root');
  root.innerHTML = generateBlock(tmp);
}

export default render;
