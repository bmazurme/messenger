import React from 'react';
import useUser from '../../hook/useUser';

export default function Profile() {
  const userData = useUser();
  console.log(userData);
  return (
    <section className="profile">
      <div className="profile__avatar" />
      <h2 className="profile__title">Profile</h2>
      <ul className="list">
        <li className="list__item">
          <p className="list__label">
            Email
          </p>
          <p className="list__value">
            {userData?.email || '-'}
          </p>
        </li>
      </ul>
    </section>

  );
}
