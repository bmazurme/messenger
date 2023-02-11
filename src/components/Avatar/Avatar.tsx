import React from 'react';

import { RESOURCES } from '../../utils/constants';

export default function Avatar({ avatar }: { avatar: string | null}) {
  const shortName = 'NN';
  return (avatar && avatar !== 'null'
    ? <img className="avatar" src={`${RESOURCES}${avatar}`} alt="img" />
    : <div className="avatar">{shortName}</div>);
}
