import { compile } from 'handlebars';

const source = '{{{messageList}}}';

export const tmp = compile(source);
