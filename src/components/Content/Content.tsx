import React from 'react';
import type { PropsWithChildren } from 'react';

export default function Content({ children }: PropsWithChildren) {
  return (
    <section className="content">
      {children}
    </section>
  );
}
