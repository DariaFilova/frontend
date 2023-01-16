import React from 'react';
import './Reviews.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../img/reviews_avatar.png';

const Reviews = () => {
    return (
        <>
              <section className="reviews">
                    <div className="container">
                        <div className="subtitle">Отзывы</div>
                        <h2 className="title">Ваши благодарности</h2>

                        <div className="reviews__item">
                        <p className="reviews__text">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                            латинице с начала XVI века. В то время некий безымянный печатник
                            создал большую коллекцию размеров и форм шрифтов, используя Lorem
                            Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто
                            используемый в печати и вэб-дизайне.
                        </p>
                        <div className="reviews__footer">
                            <img
                            src={avatar}
                            alt="avatar"
                            className="reviews__avatar"
                            />
                            <div className="reviews__personal">
                            <div className="reviews__personal_name">Екатерина Иванова</div>
                            <div className="reviews__personal_company">
                                Директор ООО “Раз-два”
                            </div>
                            </div>
                        </div>
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

export default Reviews;