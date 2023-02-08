/* eslint-disable max-len */
import React from 'react';

import Card from '../Card';

export default function Cards({ cards }: { cards: Card[] }) {
  return (
    <ul className="cards">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </ul>
  );
}
