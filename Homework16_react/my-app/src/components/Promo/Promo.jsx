import React from 'react';
import './Promo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Promo = () => {
    return (
        <>
            <section className="promo" id="promo">
                <div className="container">
                    <h1 className="promo__title">
                    Бухгалтерские услуги <br />
                    в Киеве
                    </h1>
                    <button className="promo__button">Наша презентация</button>
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

export default Promo;