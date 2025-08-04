import type { FC } from "react";
import '../styles/CompanyInfoFooter.css';

export const CompanyInfoFooter: FC = () => {
    return (
        <section className="company-info-special">
            <h1 className="footer-title">МИР ЗАПЧАСТЕЙ в двух словах</h1>
            <ul className="features-list">
                <li style={{backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=9459be69d5f34952dc7d98a934daea97_l-4389215-images-thumbs&n=13',backgroundPosition: '40%'}}>
                    <div className="feature-content">
                        <h3>Оперативный сервис</h3>
                        <p>Среднее время ответа на сообщения клиента в районе 15 минут</p>
                    </div>
                </li>
                <li style={{backgroundImage: 'url(https://www.pro-lada.ru/upload/iblock/ed6/ed6f369ab285fd14d8d0c0b1efdc7bbb.jpg)',backgroundPosition: '30%'}}>
                    <div className="feature-content">
                        <h3>Доставка по РФ, Беларуси и Казахстану</h3>
                        <p>Доставляем нашу продукцию по всей России и в страны СНГ – Беларусь и Казахстан</p>
                    </div>
                </li>
                <li style={{backgroundImage: 'url(https://azimut-salon.ru/static/imgCar/109/5624g4.jpg?v=9.3)',backgroundPosition: '30%'}}>
                    <div className="feature-content">
                        <h3>Постоянные скидки и акции</h3>
                        <p>Вы не пропустите ни одной акции</p>
                    </div>
                </li>
                <li style={{backgroundImage: 'url(https://avatars.mds.yandex.net/get-vertis-journal/3934100/Lada_Niva_Bronto.jpg_1711695265310/orig)',backgroundPosition: '45%'}}>
                    <div className="feature-content">
                        <h3>Широкий ассортимент</h3>
                        <p>Комплектующие и сопутствующие товары для грузовых автомобилей и их водителей</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}