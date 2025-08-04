import { useState } from 'react';
import { useBasket } from '../Context/BasketContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import '../styles/CheckoutPage.css';

// Конфигурация (ЗАМЕНИТЕ НА СВОИ ДАННЫЕ)
const BOT_TOKEN = '8264322522:AAG2exP7_LOUTW01zpdv-KYKz2KXP5GyIEc'
const CHAT_ID = -1002774809072; // Пример: '866417954' (должен быть строкой или числом)
const ADMIN_EMAIL = 'egormark142@gmail.com'; // Email для уведомлений
const BACKUP_EMAIL = 'ваш_резервный@email.com'; // Резервный email

// Альтернативные API Telegram (на случай блокировки основного)
const TELEGRAM_API_URLS = [
  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, // Дублируем основной URL для надежности
];

export const CheckoutPage = () => {
  const { basketArray, basketTotal, clearBasket } = useBasket();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Проверка доступности бота Telegram
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

  // Отправка сообщения в Telegram
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

  // Отправка заказа
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Формируем текст заказа
      const itemsText = basketArray
        .map((item) => `- ${item.title} (${item.quantity} шт.) — ${item.price * item.quantity} руб.`)
        .join('\n');

      const orderText = `Новый заказ!\n\nКлиент: ${name}\nТелефон: ${phone}\nEmail: ${email}\n\nТовары:\n${itemsText}\n\nИтого: ${basketTotal} руб.`;

      // 1. Пытаемся отправить в Telegram
      const telegramSent = await sendToTelegram(orderText);

      // 2. Если Telegram не сработал — отправляем на резервный email
      if (!telegramSent) {
        console.warn('Telegram недоступен, отправляем на резервный email');
        const backupSubject = `[Резерв] Заказ от ${name}`;
        window.open(
          `mailto:${BACKUP_EMAIL}?subject=${encodeURIComponent(backupSubject)}&body=${encodeURIComponent(orderText)}`,
          '_blank'
        );
      }

      // 3. Отправляем подтверждение клиенту и администратору
      const emailSubject = `Ваш заказ на ${basketTotal} руб.`;
      const emailBody = `Уважаемый ${name}, спасибо за заказ!\n\nДетали:\n${itemsText}\n\nИтого: ${basketTotal} руб.\n\nМы свяжемся с вами для подтверждения.`;

      window.open(
        `mailto:${email}?bcc=${ADMIN_EMAIL}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
        '_blank'
      );

      // Очищаем корзину и переходим на страницу успеха
      clearBasket();
      navigate(ROUTES.ORDER_SUCCESS);
    } catch (error) {
      alert('Ошибка при оформлении заказа. Пожалуйста, попробуйте ещё раз или свяжитесь с нами.');
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
        {basketArray.map((item) => (
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