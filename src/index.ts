import render from './core/render';
import router from './core/router';

const block = router();
render('.app', block);
