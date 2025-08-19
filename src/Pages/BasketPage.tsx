// BasketPage.tsx
import type { FC } from "react";
import { useBasket } from "../Context/BasketContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import '../styles/BasketPage.css'
import telegramIcon from '../../public/TELEGRAM.png'
import vkIcon from '../../public/VK.png'
import galochka from '../../public/GALOCHKA.svg'
import krestik from '../../public/KREST.svg'


export const BasketPage: FC = () => {
    const { basketArray, basketCount, basketTotal, deleteFromBasket, clearBasket, updateQuantity } = useBasket()

    if (basketCount === 0) {
        return (
            <div className="empty-basket-container">
                <div className="empty-basket">
                    <h1>Корзина покупок</h1>
                    <h3>Ваша корзина пуста</h3>
                    <Link to={ROUTES.CATALOG} className="continue-shopping">
                        Перейти в каталог
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="basket-layout">
            <div className="basket-items-column">
                <div className="header-basket-top">
                   <h1>Корзина покупок</h1>
                   <button className="button-top-basket" onClick={clearBasket}>Очистить корзину</button>
                </div>
                
                
                {basketArray?.map(item => (
                    <div key={item.id} className="basket-item">
                        <div className="item-status">
                            <span className="in-stock">{item.inStock
                             ? <div style={{display:'flex',gap:5}}><img style={{width:20,height:20}} src={galochka} alt="Галочка картинка" /><p>В наличии</p></div>
                             : <div style={{display:'flex',gap:5}}><img style={{width:20,height:20}} src={krestik} alt="Крест картинка" /><p>Нет в наличии</p></div>
                            
                            }</span>
                            <span className="item-code">Код товара: {item.id}</span>
                        </div>
                        
                        <div className="item-main">
                            <img src={item.images[0]} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <h3 className="item-title">{item.title}</h3>
                                <div className="item-controls">
                                    <div className="item-quantity">
                                        <p>Количество (от {item.quantityInLot} шт.)</p>
                                        <div className="quantity-controls">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
        
                                    <div className="item-price-actions">
                                        <p className="item-price">{item.price.toLocaleString('ru-RU')} р.</p>
                                        <button 
                                            className="remove-item"
                                            onClick={() => deleteFromBasket(item.id)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                ))}
            </div>

            <div className="sidebar-column">
                <div className="summary-block">
                    <h3>Итого в корзине</h3>
                    <div className="summary-row">
                        <span>Примерный вес заказа</span>
                        <span>0.00кг</span>
                    </div>
                    <div className="summary-row">
                        <span>Количество товаров</span>
                        <span>{basketCount} шт.</span>
                    </div>
                    <div className="summary-total">
                        <span>Сумма</span>
                        <span>{basketTotal.toLocaleString('ru-RU')} р.</span>
                    </div>
                    <Link to={ROUTES.CHECKOUT} className="checkout-button">
                        Оформить заказ →
                    </Link>
                </div>

                <div className="helps-block">
                    <h3 className="help-title-BAS">Нужна помощь с заказом?</h3>
                    <p className="help-text">Позвоните по номеру: 
                        <a href="tel:+79370744877" className="phone-link">  +7 937 074 48 77</a>
                    </p>
                    <div className="social-links">
                        <p className="social-text">Или просто напишите нам в чате:</p>
                        <div className="social-icons">
                            <a href="https://t.me/mirzap63" className="social-icon">
                                <img src={telegramIcon} alt="Telegram" />
                            </a>
                            <a href="https://vk.com/mirzap63" className="social-icon">
                                <img src={vkIcon} alt="VK" />
                            </a>
                        </div>
                    </div>
                    <div className="work-hours">
                        <p className="hours-office">График работы Офис: Пн-Пт 7:00-15:00 МСК</p>
                        <p className="hours-shop">Магазины: Пн-Вс 7:00-21:00 МСК</p>
                    </div>
                </div>
            </div>
        </div>
    )
}