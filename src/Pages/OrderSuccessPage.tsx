import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import success from '../../public/SUCCESS-TRUE.png'
import '../styles/OrderSuccessPage.css'

export const OrderSuccessPage = () => {
    return (
        <div className="order-success">
            <div className="success-container">
                <img style={{width:100,height:100}} src={success} alt="успешно-картинка" />
                <h1>Спасибо за ваш заказ!</h1>
                <p>Мы получили ваш заказ и свяжемся с вами в ближайшее время для подтверждения.</p>
                <Link to={ROUTES.HOME} className="back-to-home">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};