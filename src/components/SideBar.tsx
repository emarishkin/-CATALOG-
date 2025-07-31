import type { FC } from "react";
import { Link } from "react-router-dom";
import homeLink from '../../public/HomeSideBar.png'
import '../styles/SideBar.css'
import { categories } from "../data";
import { ROUTES } from "../utils/routes";

interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => {
    return (
        <section className="sidebar-section"> 
            <div className="user-sidebar">
                <img className="user-avatar" src="user" alt="Аватар пользователя" />
                <h2>User Name</h2>
            </div>
            
            <div className="sidebar-category">
                <div className="home-sedebar">
                    <Link to={ROUTES.HOME}>
                        <img src={homeLink} alt="Иконка дом" />
                        <h2>Главная</h2>
                    </Link>
                </div>

                <div className="info-sedebar">
                    <Link to={ROUTES.INFO}>
                        <img src={homeLink} alt="Иконка информации" />
                        <h2>О нас</h2>
                    </Link>
                </div>

                <div className="category-title">Категории</div>
                <div className="category-items">
                    {categories.map(category => (
                        <Link
                            key={category.id}
                            to={`/categories/${category.id}`}
                        >
                            <img src={category.icon} alt='иконка категории' />
                            <span>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}