import type { FC } from "react";
import { useCategory } from "../Context/CategoryContext";
import { products } from "../data";
import { ProductCard } from "../components/Cards/ProductCard";
import '../styles/CategoryPage.css'

export const CategoryPage:FC = () => {

    const {selectedCategory} = useCategory()

    const filtredProducts = selectedCategory ? products.filter(product=>product.category.id === selectedCategory) : products

    return(
      <div className="category-page">
        {/* <h2>{selectedCategory ? `Товары категории ${selectedCategory}` : "Все товары"}</h2> */}
        <div className="products-grid">
            {filtredProducts.map(product=>(
                <ProductCard key={product.category.id} product={product} />
            ))}
        </div>
      </div>
    )
}