import type { FC } from "react";
import { products } from "../data";
import { ProductCard } from "./Cards/ProductCard";
import '../styles/MostPopularProducts.css';

interface MostPopularProductsProps {}

export const MostPopularProducts: FC<MostPopularProductsProps> = () => {
    return (
        <section className="popular-products" aria-labelledby="popular-products-title"> 
            <div className="container">
                <h2 className="title-products" id="popular-products-title">
                    Самые продаваемые товары
                </h2>
                <div className="popular-products-grid">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};