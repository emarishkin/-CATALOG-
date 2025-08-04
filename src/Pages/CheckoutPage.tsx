import { useState } from 'react';
import { useBasket } from '../Context/BasketContext';
import {  useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import '../styles/CheckoutPage.css';

const BOT_TOKEN = 'ВАШ_BOT_TOKEN';
const CHAT_ID = 'ВАШ_CHAT_ID';

export const CheckoutPage = () => {
    const { basketArray, basketTotal, clearBasket } = useBasket();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const itemsText = basketArray.map(item => 
                `- ${item.title} (${item.quantity} шт.) - ${item.price * item.quantity} руб.`
            ).join('\n');
            const message = `Новый заказ!\n\nИмя: ${name}\nТелефон: ${phone}\n\nТовары:\n${itemsText}\n\nИтого: ${basketTotal} руб.`;

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message
                })
            });

            clearBasket();
            navigate(ROUTES.ORDER_SUCCESS);
        } catch (error) {
            alert('Ошибка при отправке заказа. Пожалуйста, попробуйте ещё раз или свяжитесь с нами другим способом.');
            console.error('Ошибка:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <h1>Оформление заказа</h1>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label>Ваше имя*</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label>Телефон*</label>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="\+?[0-9\s\-\(\)]+"
                        required 
                    />
                </div>
                
                <button type="submit" disabled={isLoading} className="submit-order">
                    {isLoading ? 'Отправка...' : 'Подтвердить заказ'}
                </button>
            </form>
            
            <div className="order-summary">
                <h2>Ваш заказ</h2>
                {basketArray.map(item => (
                    <div key={item.id} className="order-item">
                        <img src={item.images[0]} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.quantity} × {item.price} руб.</p>
                        </div>
                    </div>
                ))}
                <div className="order-total">
                    <span>Итого:</span>
                    <span>{basketTotal} руб.</span>
                </div>
            </div>
        </div>
    );
};