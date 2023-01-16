import React from 'react';
import './Contacts.scss'

const Contacts = () => {
    return (
        <div>
                    <section className="contacts" id="contacts">
                <div className="container">
                <div className="contacts__left">
                    <h2 className="title">Связь с нами</h2>
                    <p className="contacts__text">
                    У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
                    </p>
                    <div className="contacts__links">
                    <div className="contacts__link">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <a href="tel:+71112223344" target="_blank"> +7 (111) 222-33-44</a>
                    </div>

                    <div className="contacts__link">
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:order@bu-one.ru" target="_blank">
                        order@bu-one.ru</a
                        >
                    </div>
                    </div>
                </div>
                <div className="contacts__right">
                    <form>
                    <div className="contacts__fields">
                        <label> Имя<input type="text" placeholder="Иван" /> </label>
                        <label>
                        Фамилия <input type="text" placeholder="Иванов" />
                        </label>
                    </div>
                    <label>
                        Сообщение
                        <input type="text" name="textarea" placeholder="Ваше сообщение" />
                    </label>

                    <button>Отправить сообщение</button>
                    </form>
                </div>
                </div>
                </section>
        </div>
    );
};

export default Contacts;