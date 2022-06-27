// export type PropsType = Record<string, any>


export default function render(query: string, block: any) {
  const root = document.querySelector(query);
  if (root) {
    root.innerHTML = '';
    root.appendChild(block._blockClass.getContent());
  }
  return root;
}
