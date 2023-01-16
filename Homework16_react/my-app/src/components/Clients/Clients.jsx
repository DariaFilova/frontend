import React from 'react';
import './Clients.scss'
import clientLogo from '../../img/clients_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Clients = () => {
    return (
        <>
            <section className="clients" id="clients">
      <div className="container">
        <div className="subtitle">Наши клиенты</div>
        <h2 className="title">С нами работают</h2>
        <div className="clients__logos">
          <img src={clientLogo} alt="logo" />
          <img src={clientLogo} alt="logo" />
          <img src={clientLogo} alt="logo" />
          <img src={clientLogo} alt="logo" />
          
        </div>
        <div className="navigation">
            <button className="navigation_item">
                <FontAwesomeIcon className='navigation_icon' icon={faChevronLeft}/>
            </button>
            <button className="navigation_item">
            <FontAwesomeIcon className='navigation_icon' icon={faChevronRight}/>
            </button>
        </div>
      </div>
    </section>
        </>
    );
};

export default Clients;