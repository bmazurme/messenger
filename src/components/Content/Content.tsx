import React from 'react';
import type { PropsWithChildren } from 'react';

import SideBar from '../SideBar';
import Board from '../Board';

export default function Content({ children }: PropsWithChildren) {
  return (
    <section className="chat">
      <SideBar />
      <Board />
    </section>
  );
}
