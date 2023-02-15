import React from 'react';
import { Link } from 'react-router-dom';

import { Urls } from '../../utils/constants';

export default function ProfileMenu({ signOutHandler }
  : { signOutHandler: () => void }) {
  return (
    <ul className="profile__menu">
      <li className="list__item">
        <Link className="profile__link" to={Urls.PROFILE_EDIT}>
          Edit profile data
        </Link>
      </li>
      <li className="list__item">
        <Link className="profile__link" to={Urls.PASSWORD_EDIT}>
          Edit password
        </Link>
      </li>
      <li className="list__item">
        <Link
          className="profile__link profile__link_logout"
          onClick={signOutHandler}
          to={Urls.SIGNIN}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}
