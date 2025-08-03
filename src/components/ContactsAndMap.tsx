import type { FC } from "react";
import telegramIcon from '../../public/TELEGRAM.png'
import vkIcon from '../../public/VK.png'
import mobila from '../../public/MOBILA.svg'
import locatoin from '../../public/LOCATION.svg'
import '../styles/ContactsAndMap.css'

export const ContactsAndMap:FC = () => {
    return (
        <section className="company-info-footer">
            <div className="contacts-info-block">
                <h1 className="footer-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h1> 
                <p className="footer-subtitle">Свяжитесь с нами удобным для Вас способом, будем рады сотрудничеству</p>
                
                <div className="contact-item phone-contact">
                    <div className="icon-wrapper">
                        <img style={{width:25,height:25}} src={mobila} alt="Трубка телефона" />
                    </div>
                    <p className="contact-text">Звоните по номеру: 
                        <a href="tel:+79049337054" className="phone-link"> +7 904 933 70 54</a>
                    </p>
                </div> 
                
                <div className="contact-item place-contact">
                    <div className="icon-wrapper">
                        <img style={{width:25,height:25}} src={locatoin} alt="Локация" />
                    </div>
                    <p className="contact-text">Мы находимся по адресу:<br />Россия, Самара, Ташкентская, д.165 офис 307</p>
                </div>
                
                <div className="social-links-footer">
                    <p className="social-text-footer">Или просто напишите нам в чате:</p>
                    <div className="social-footer">
                        <a href="https://t.me/mirzap63" className="social-footer tg-icon">
                            <img src={telegramIcon} alt="Telegram" />
                        </a>
                        <a href="https://vk.com/mirzap63" className="social-footer vkont-icon">
                            <img src={vkIcon} alt="VK" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="map-block">
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A686685feb7bfd070c1f790b20ed30e99700af2ea7aa9ae167ea97336c92a4944&amp;source=constructor"
                    width="100%"
                    height="500"
                    title="Адрес компании: Россия, Самара, Ташкентская, д.165 офис 307"
                    allowFullScreen
                    className="map-iframe"
                ></iframe>
            </div>
        </section>
    )
}