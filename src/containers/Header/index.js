import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Glists | <span className="header__site-description">GitHub Lists</span></h1>
    </header>
  )
}

export default Header;
