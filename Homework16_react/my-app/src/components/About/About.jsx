import React from 'react';
import './About.scss';

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about__left">
                    <div className="subtitle">О нас</div>
                    <h2 className="title">Компания <span>ИвановПром</span></h2>
                    <p className="about__left_info">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                        латинице с начала XVI века. В то время некий безымянный печатник
                        создал большую коллекцию размеров и форм шрифтов, используя Lorem
                        Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
                        без заметных изменений пять веков, но и перешагнул в электронный
                        дизайн.
                    </p>
                    </div>
                    <div className="about__right">
                    <div className="about__items">
                        <div className="about__item">
                        <div className="about__item_number">90</div>
                        <div className="about__item_text">Завершено крупных сделок</div>
                        <a href="" className="about__item_link">Все кейсы</a>
                        </div>
                        <div className="about__item">
                        <div className="about__item_number">90</div>
                        <div className="about__item_text">Завершено крупных сделок</div>
                        <a href="" className="about__item_link">Все кейсы</a>
                        </div>
                        <div className="about__item">
                        <div className="about__item_number">90</div>
                        <div className="about__item_text">Завершено крупных сделок</div>
                        <a href="" className="about__item_link">Все кейсы</a>
                        </div>
                        <div className="about__item">
                        <div className="about__item_number">90</div>
                        <div className="about__item_text">Завершено крупных сделок</div>
                        <a href="" className="about__item_link">Все кейсы</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;