import type { FC } from "react";
import { useBasket } from "../Context/BasketContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import '../styles/BasketPage.css'

export const BasketPage:FC = () => {
    const { basketArray, basketCount, basketTotal, deleteFromBasket, clearBasket, updateQuantity } = useBasket()

    return (
        <div className="basket-page">
            {basketCount === 0 ? (
                <div className="empty-basket">
                    <h3>Корзина пуста</h3>
                    <Link to={ROUTES.HOME} className="continue-shopping">
                        Продолжить покупки
                    </Link>
                </div>
            ) : (
                <div className="basket-items">
                    {basketArray?.map(item => (
                        <div key={item.id} className="basket-item">
                            <img src={item.images[0]} alt={item.title} className="basket-item-image" />  
                            <div className="basket-item-info">
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <div className="cart-item-actions">
                                <button className="remove-item" onClick={() => deleteFromBasket(item.id)}>Удалить</button>
                                <p>Сумма: {(item.quantity * item.price).toFixed(2)}$</p>
                            </div>
                        </div>
                    ))}
                    
                    <div className="cart-summary">
                        <h3>Итого: {basketTotal.toFixed(2)}$</h3>
                        <div className="cart-actions">
                            <button className="clear-basket" onClick={clearBasket}>Очистить корзину</button>
                            <Link to={ROUTES.CHECKOUT} className="checkout-button">
                                Оформить заказ
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}