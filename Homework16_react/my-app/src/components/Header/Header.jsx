import React from 'react';
import './Header.scss'
/* import '../media.scss' */
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <header className="header">
      <div className="container">
        <img src={logo} alt="logo" className="header__logo" />
        <nav className="header__nav">
          <a href="#promo">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#clients">Кейсы</a>
          <a href="#about">О компании</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header__hamburger">
          <FontAwesomeIcon icon={faBars} className="header__hamburger_icon" />
        </div>
      </div>
    </header>
        </div>
    );
};

export default Header;