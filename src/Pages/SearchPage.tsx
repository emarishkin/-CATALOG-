import { useState, type FC, useEffect } from "react";
import { useSearch } from "../Context/SearchContext";
import searchIcon from '../../public/SEARCH.svg';
import '../styles/SearchPage.css';
import { ProductCard } from "../components/Cards/ProductCard";

export const SearchPage: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const { performSearch, searchResults, searchQuery } = useSearch();

    // Синхронизируем значение из контекста при загрузке страницы
    useEffect(() => {
        setSearchValue(searchQuery);
    }, [searchQuery]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        // Выполняем поиск при каждом изменении
        performSearch(value);
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
                        <h2>Результаты поиска {searchValue && `по запросу: "${searchValue}"`}</h2>
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
                    <div className="no-results">Ничего не найдено по запросу: "{searchValue}"</div>
                ) : (
                    <div className="no-results">Введите поисковый запрос</div>
                )}
            </div>
        </div>
    );
};