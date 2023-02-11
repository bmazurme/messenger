import Block from './block';

export function renderBlock(query: string, block: Block) {
  const root: HTMLElement|null = document.querySelector(query);
  root!.innerHTML = '';
  root!.appendChild(block.getContent()!);
  
  return root;
}
