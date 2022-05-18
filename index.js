import { routes } from "./src/data/routes";
import { ERROR_NOT_FOUND } from "./src/data/const";

const root = document.getElementById('root');

const render = ({ view, context }) => {
  const block = view();
  return block(context);
}

const url = window.location.pathname;
const page = routes.get(routes.has(url) ? url : ERROR_NOT_FOUND);

root.innerHTML = render(page);