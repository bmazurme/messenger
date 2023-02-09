import React from 'react';

export default function Avatar({ user }: { user: User}) {
  const url = 'https://ya-praktikum.tech/api/v2/resources';
  const shortName = `${user?.first_name[0]}${user?.second_name[0]}`;
  return (user?.avatar
    ? <img className="avatar" src={`${url}${user?.avatar}`} alt="img" />
    : <div className="avatar">{shortName}</div>);
}
