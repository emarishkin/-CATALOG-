import type { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import logo from '../../public/LOGOwHITE.png';
import telegramIcon from '../../public/TELEGRAM.png';
import vkIcon from '../../public/VK.png';
// import instagramIcon from '../../public/INSTAGRAM.png';
import '../styles/Footer.css';

export const Footer: FC = () => {
    return (
        <footer className="footer">
          <div className="logo">
            <Link to={ROUTES.HOME}>
                <img src={logo} alt="Логотип" />  
            </Link>
          </div>

          {/* <div className="rights">
            Developed by <a href="https://i.pinimg.com/736x/8e/5b/9d/8e5b9dfe403129b1687bc799335bef3e.jpg" target="_blank" rel="noopener noreferrer">Marik</a>
          </div> */}

          <div className="socials">
            <a href="https://t.me/mirzap63" className="icon">
              <img src={telegramIcon} alt="Telegram" />
            </a>
            <a href="https://vk.com/mirzap63" className="icon">
              <img src={vkIcon} alt="VK" />
            </a>
            {/* <a href="#" className="icon">
              <img src={instagramIcon} alt="Instagram" />
            </a> */}
          </div>
        </footer>
    )
}