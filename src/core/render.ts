import Block from './block';

export function renderBlock(query: string, block: Block) {
  const root = document.querySelector(query);
  root!.innerHTML = '';
  root!.appendChild(block.getContent()!);
  return root;
}
