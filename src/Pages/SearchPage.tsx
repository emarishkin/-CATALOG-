import { useState, type FC } from "react";
import { useSearch } from "../Context/SearchContext";
import searchIcon from '../../public/SEARCH.svg';
import '../styles/SearchPage.css';
import { ProductCard } from "../components/Cards/ProductCard";

export const SearchPage: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const { performSearch, searchResults } = useSearch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value.trim()) {
            performSearch(value);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue.trim()) {
            performSearch(searchValue);
        }
    };

    return (
        <div className="search-page">
            <div className="search-page-container">
                {/* Добавляем класс pc-hidden для скрытия на ПК */}
                <form className="search-form pc-hidden" onSubmit={handleSubmit}>
                    <img src={searchIcon} alt="Иконка поиска" className="search-icon" />
                    <input
                        name="search"
                        placeholder="Поиск..."
                        type="search"
                        onChange={handleSearchChange}
                        autoComplete="off"
                        value={searchValue}
                        autoFocus
                    />
                </form>
                
                {searchResults.length > 0 ? (
                    <div className="search-results">
                        <h2>Результаты поиска</h2>
                        <div className="search-results-container">
                            {searchResults.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                />
                            ))}
                        </div>
                    </div>
                ) : searchValue ? (
                    <div className="no-results">Ничего не найдено</div>
                ) : null}
            </div>
        </div>
    );
};