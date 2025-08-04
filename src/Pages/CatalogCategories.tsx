import type { FC } from "react";
import { categories } from "../data";
import { Link } from "react-router-dom";
import { useCategory } from "../Context/CategoryContext";
import '../styles/CatalogCategories.css'

export const CatalogCategories:FC = () => {
    const { setSelectedCategory } = useCategory()
    
    return (
        <section className="catalog-categories-page"> 
            <h1>Категории</h1>
            <div className="catalog-categories-grid">
                {categories.map(category => (
                    <Link
                        className="categories-elements"
                        style={{backgroundImage: `url(${category.backImage})`}}
                        key={category.id}
                        to={`/categories/${category.id}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <span>{category.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}