import React from 'react';

import './preloader.css';

export default function Preloader() {
  return (
    <div className="preloader__center">
      <div className="preloader__ring" />
      <span className="preloader__span">
        loading...
      </span>
    </div>
  );
}
