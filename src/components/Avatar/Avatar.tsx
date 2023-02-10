import React from 'react';

export default function Avatar({ avatar }: { avatar: string | null}) {
  const url = 'https://ya-praktikum.tech/api/v2/resources';
  const shortName = 'NN';

  return (avatar && avatar !== 'null'
    ? <img className="avatar" src={`${url}${avatar}`} alt="img" />
    : <div className="avatar">{shortName}</div>);
}
