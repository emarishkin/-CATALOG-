import type { FC } from "react";
import auraFON from '../../public/AURA.webp';
// import largus from '../../public/LARGUS-TEST.jpg';
import '../styles/CompanyInfoTop.css';

export const CompanyInfoTop: FC = () => {
    return (
        <section className="company-info-section">
            <div className="company-info-container">
                <div className="company-info-text">
                    <h3 className="company-subtitle">ДЕЯТЕЛЬНОСТЬ</h3>
                    <h1 className="company-title">Мы предлагаем качественные аксессуары для удобного и безопасного вождения автомобиля</h1>
                    <p className="company-description">
                        Деятельность нашей компании направлена на продажу качественных аксессуаров для грузовых и легковых автомобилей.
                    </p>
                    <p className="company-description">
                        Мы работаем с 2015 года и уже как 8 лет успешно доставляем нашу продукцию по всей России и в страны СНГ – Беларусь и Казахстан. Наша цель – предоставить клиентам качественные товары, высокий уровень сервиса и приемлемые цены.
                    </p>
                </div>
                <div className="company-info-image">
                    <img src={auraFON} alt="Автомобильные аксессуары" />
                </div>
            </div>
        </section>
    );
};