import type { FC } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import homeLink from '../../public/HomeSideBar.png';
import '../styles/SideBar.css';
import info from '../../public/INFO-sidebar.png';
import searchIcon from '../../public/SEARCH.svg';
import { categories } from "../data";
import { ROUTES } from "../utils/routes";
import { useSidebar } from "../Context/SidebarContext";
import { useCategory } from "../Context/CategoryContext";

interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => {
    const { setSelectedCategory } = useCategory();
    const { isSidebarOpen, closeSidebar } = useSidebar();

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isSidebarOpen]);

    return (
        <div className={`sidebar ${isSidebarOpen ? 'mobile-visible' : ''}`}>
            <section className="sidebar-section"> 
                <div className="sidebar-category">
                    <div className="sidebar-top-links">
                        <div className="home-sedebar">
                            <Link to={ROUTES.HOME} onClick={closeSidebar}>
                                <img src={homeLink} alt="Иконка дом" />
                                <h2>Главная</h2>
                            </Link>
                        </div>

                        {/* Кнопка поиска только для мобильных */}
                        <div className="mobile-only info-sedebar">
                            <Link to={ROUTES.SEARCH} onClick={closeSidebar}>
                                <img src={searchIcon} alt="Иконка поиска" />
                                <h2>Поиск</h2>
                            </Link>
                        </div>

                        <div className="info-sedebar">
                            <Link to={ROUTES.INFO} onClick={closeSidebar}>
                                <img src={info} alt="Иконка информации" />
                                <h2>Компания</h2>
                            </Link>
                        </div>

                        <div className="info-sedebar">
                            <Link to={ROUTES.CONTACTS} onClick={closeSidebar}>
                                <img src={info} alt="Иконка информации" />
                                <h2>Контакты</h2>
                            </Link>
                        </div>
                        <div className="info-sedebar">
                            <Link to={ROUTES.CATALOG} onClick={closeSidebar}>
                                <img src={info} alt="Иконка информации" />
                                <h2>Каталог</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="categories-container">
                        <div className="category-title">Категории</div>
                        <div className="category-items">
                            {categories.map(category => (
                                <Link
                                    key={category.id}
                                    to={`/categories/${category.id}`}
                                    onClick={() => {
                                        closeSidebar();
                                        setSelectedCategory(category.id);
                                    }}
                                >
                                    <img src={category.icon} alt='иконка категории' />
                                    <span>{category.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};