import type { FC } from "react";
import { Link } from "react-router-dom";
import homeLink from '../../public/HomeSideBar.png'
import '../styles/SideBar.css'
import avatar from '../../public/GUEST.png'
import info from '../../public/INFO-sidebar.png'
import { categories } from "../data";
import { ROUTES } from "../utils/routes";
import { useSidebar } from "../Context/SidebarContext";
import { useCategory } from "../Context/CategoryContext";

interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => {

    const { setSelectedCategory } = useCategory()

    const {isSidebarOpen, closeSidebar} = useSidebar()

    return (
    <div className={`sidebar ${isSidebarOpen ? 'mobile-visible' : ''}`}>
        <section className="sidebar-section"> 
            <div className="user-sidebar">
                <img className="user-avatar" src={avatar} alt="Аватар пользователя" />
                <h2>Марик</h2>
            </div>
            
            <div className="sidebar-category">
                <div className="home-sedebar">
                    <Link to={ROUTES.HOME} onClick={closeSidebar}>
                        <img src={homeLink} alt="Иконка дом" />
                        <h2>Главная</h2>
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

                <div className="category-title">Категории</div>
                <div className="category-items">
                    {categories.map(category => (
                        <Link
                            key={category.id}
                            to={`/categories/${category.id}`}
                            onClick={()=>{
                                closeSidebar()
                                setSelectedCategory(category.id);
                            }}
                        >
                            <img src={category.icon} alt='иконка категории' />
                            <span>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </div>
    )
}