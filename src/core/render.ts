export type PropsType = Record<string, any>

export default function render(query: string, block: any) {
  const root = document.querySelector(query);
  root.appendChild(block.getContent());
  return root;
}
