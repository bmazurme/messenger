import React from 'react';

import NavItem from '../NavItem';

export default function SignIn({ help, url, label }: Record<string, string>) {
  return (
    <ul className="footer__links">
      {help}
      <NavItem
        to={url}
        className="link link-signup"
        active="true"
        value={label}
      />
    </ul>
  );
}
