import { useState } from 'react';
import { useBasket } from '../Context/BasketContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import '../styles/CheckoutPage.css';

const BOT_TOKEN = '8264322522:AAG2exP7_LOUTW01zpdv-KYKz2KXP5GyIEc'
const CHAT_ID = -1002774809072;
const ADMIN_EMAIL = 'egormark142@gmail.com'; 
const BACKUP_EMAIL = 'ваш_резервный@email.com'; 

const TELEGRAM_API_URLS = [
  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, 
];

export const CheckoutPage = () => {
  const { basketArray, basketTotal, clearBasket } = useBasket();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const testTelegramConnection = async () => {
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`);
      const data = await response.json();
      return data.ok === true;
    } catch (error) {
      console.error('Ошибка подключения к Telegram:', error);
      return false;
    }
  };

  const sendToTelegram = async (message: string) => {
    const botAvailable = await testTelegramConnection();
    if (!botAvailable) return false;

    for (const url of TELEGRAM_API_URLS) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            disable_web_page_preview: true,
          }),
        });
        const data = await response.json();
        if (data.ok) return true;
      } catch (error) {
        console.error(`Ошибка при отправке через ${url}:`, error);
      }
    }
    return false;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value.length < 3) {
      setPhone('+7 ');
      return;
    }
    
    if (!value.startsWith('+7 ')) {
      const digits = value.replace(/\D/g, '');
      if (digits.startsWith('7')) {
        setPhone('+7 ' + digits.slice(1));
      } else {
        setPhone('+7 ' + digits);
      }
      return;
    }
    
    const newValue = '+7 ' + value.slice(3).replace(/\D/g, '');
    setPhone(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const itemsText = basketArray
        .map((item) => `- ${item.title} (${item.quantity} шт.) — ${item.price * item.quantity} руб.`)
        .join('\n');

      const orderText = `Новый заказ!\n\nКлиент: ${name}\nТелефон: ${phone}\nEmail: ${email}\n\nТовары:\n${itemsText}\n\nИтого: ${basketTotal} руб.`;

      const telegramSent = await sendToTelegram(orderText);

      if (!telegramSent) {
        console.warn('Telegram недоступен, отправляем на резервный email');
        const backupSubject = `[Резерв] Заказ от ${name}`;
        window.open(
          `mailto:${BACKUP_EMAIL}?subject=${encodeURIComponent(backupSubject)}&body=${encodeURIComponent(orderText)}`,
          '_blank'
        );
      }

      const emailSubject = `Ваш заказ на ${basketTotal} руб.`;
      const emailBody = `Уважаемый ${name}, спасибо за заказ!\n\nДетали:\n${itemsText}\n\nИтого: ${basketTotal} руб.\n\nМы свяжемся с вами для подтверждения.`;

      window.open(
        `mailto:${email}?bcc=${ADMIN_EMAIL}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
        '_blank'
      );

      clearBasket();
      navigate(ROUTES.ORDER_SUCCESS);
    } catch (error) {
      navigate(ROUTES.ROUTES_ERROR)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h1>Оформление заказа</h1>
      <div className="checkout-layout">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Контактная информация</h2>
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
              onChange={handlePhoneChange}
              pattern="\+7\s[0-9\s\-\(\)]{10,}"
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={isLoading} className="submit-order">
            {isLoading ? 'Отправка...' : 'Подтвердить заказ'}
          </button>
        </form>

        <div className="order-summary">
          <h2>Ваш заказ</h2>
          <div className="order-items">
            {basketArray.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.images[0]} alt={item.title} />
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>{item.quantity} × {item.price} руб.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <div className="total-row">
              <span>Итого:</span>
              <span>{basketTotal} руб.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};