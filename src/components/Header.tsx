import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import logo from '../../public/logo.svg';
import searchIcon from '../../public/SEARCH.svg';
import heart from '../../public/HEART.png';
import basket from '../../public/BAY.png';
import burger from '../../public/BURGER.png'; 
import '../styles/Header.css';
import { useSidebar } from "../Context/SidebarContext";

export const Header: FC = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    
    const {toggleSidebar,isSidebarOpen} = useSidebar()

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <header className="header">
            <div className="logo-div">
                <Link to={ROUTES.HOME}>
                    <img className="logo-firm" src={logo} alt="Логотип фирмы" />
                </Link>
            </div>


            <div className={`search-container `}>
                <form className="search-form" onClick={(e) => e.stopPropagation()}>
                    <img src={searchIcon} alt="Иконка поиска" className="search-icon" />
                    <input
                        name="search"
                        placeholder="Поиск..."
                        type="search"
                        onChange={handleSearchChange}
                        autoComplete="off"
                        value={searchValue}
                    />
                </form>
            </div>

            <div className="account-actions">
                <div className="link-heart">
                    <Link to={ROUTES.HEART} className="favourites-link">
                        <img src={heart} alt="Понравившиеся товары" />
                    </Link>
                </div>
                <div className="link-basket">
                    <Link to={ROUTES.BASKET} className="basket-link">
                        <img src={basket} alt="Корзина товаров" />
                    </Link>
                </div>
            </div>

            <button className={`burger-button ${isSidebarOpen ? 'active' : ''}`} onClick={()=>{
                toggleSearch()
                toggleSidebar()
            }}>
                <img src={burger} alt="Меню" />
            </button>

        </header>
    );
};