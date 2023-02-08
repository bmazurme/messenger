import React from 'react';

export default function Card({
  id, title, text, image, time, count, you,
}: Card) {
  console.log(id);
  return (
    <li className="card">
      <div className="card__container">
        <img className="card__image" src={image} alt="img" />
        <div className="card__title">{title}</div>
        <div className="card__text">
          {you ? (
            <span className="card__from-you">
              You:
            </span>
          ) : null}
          {text}
        </div>
        <div className="card__time">
          {time.toString()}
        </div>
        {count > 0 ? (
          <div className="card__counter">
            {count}
          </div>
        ) : null}

      </div>
    </li>
  );
}
