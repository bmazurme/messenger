import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn({ help, url, label }: Record<string, string>) {
  return (
    <div className="footer__links">
      {help}
      <Link to={url} className="link link-signup">
        {label}
      </Link>
    </div>
  );
}
