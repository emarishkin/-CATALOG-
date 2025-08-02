import type { FC } from "react";
import telegram from '../../public/TELEGRAM.png';
import BACK from '../../public/VESTA.webp';
import '../styles/ContactWithYou.css'

export const ContactWithYou: FC = () => {
    return (
        <section 
            className="contact-with-you"
            style={{ backgroundImage: `url(${BACK})` }}
        >
            <div className="contact-content">
                <h3 className="contact-subtitle">КОНСУЛЬТАЦИЯ</h3>
                <h1 className="contact-title">Возникли вопросы?<br />Напишите нам!</h1>
                <p className="contact-description">
                    Мы будем рады обсудить с вами все вопросы или помочь с оформлением заказа, 
                    вы можете просто написать или позвонить нам в Telegram в удобное для вас время.
                </p>
                <a 
                    href="https://t.me/mirzap63" 
                    className="telegram-button"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={telegram} alt="Иконка телеграма" />
                    <span>Написать в Telegram</span>
                </a>
            </div>
        </section>
    );
};