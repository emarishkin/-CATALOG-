import type { FC } from "react";
import { useSearch } from "../Context/SearchContext";
import { ProductCard } from "../components/Cards/ProductCard";
import { products } from "../data";
import '../styles/SearchPage.css'

export const SearchPage: FC = () => {
    const { searchResults, searchQuery } = useSearch();

    return (
        <section className="search-page">
            {searchResults.length > 0 ? (
                <div className="search-results-container">
                    <h2 className="search-results-title">Результаты поиска: "{searchQuery}"</h2>
                    <div className="search-results-grid">
                        {searchResults.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="search-empty">
                    <h2 className="empty-message">По запросу "{searchQuery}" ничего не найдено</h2>
                    <h2 className="all-products-title">Все товары на сайте:</h2>
                    <div className="search-results-grid">
                        {products.map(prod => (
                            <ProductCard key={prod.id} product={prod} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};