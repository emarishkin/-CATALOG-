import type { FC } from "react";
import type { IProduct } from "../../types";
import { NavLink } from "react-router-dom";
import heart from '../../../public/HEART.png';
import basket from '../../../public/BAY.png';
import '../../styles/ProductCard.css';
import galochka from '../../../public/GALOCHKA.svg';
import krestik from '../../../public/KREST.svg';
import musor from '../../../public/DELETE.svg'
import { useFavorites } from "../../Context/FavoritesContext";
import { useBasket } from "../../Context/BasketContext";


interface ProductCardProps {
    product: IProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {

    const { isFavorite , addToFavorites , deleteFromFavorites} = useFavorites()

    const isFav = isFavorite(product.id)

    const { addBasket } = useBasket()

    const handleFavoriteClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        if(isFav){
            deleteFromFavorites(product.id)
        } else {
            addToFavorites(product)
        }
    }

    const handleAddToCart = (e:React.MouseEvent) => {
        e.stopPropagation()
        addBasket(product)
    }

    return (
        <div className="product-card">
            <div className="product-image-container">
            <NavLink
                to={`/products/${product.id}`}
                className="product-link"
                aria-label={`Подробнее о товаре ${product.title}`}
            >
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="product-image"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400';
                    }}
                />
            </NavLink>
            
                    
                      <button onClick={handleFavoriteClick} className={`favorite-button ${isFav ? 'active' : ''}`}>
                        <img 
                          src={isFav ? musor : heart} 
                          alt={isFav ? "Удалить из избранного" : "Добавить в избранное"} 
                          className="favorite-icon"
                        />
                      </button>
                    

            </div>
            
            <div className="header-hight-card">
                <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    <img 
                        src={product.inStock ? galochka : krestik} 
                        alt={product.inStock ? 'Товар в наличии' : 'Товара нет в наличии'} 
                    />
                    <p>{product.inStock ? 'В наличии' : 'Нет в наличии'}</p>
                </div>
                
                <div className="header-hight-card-links">
                    <button 
                        onClick={handleAddToCart}
                        aria-label="Добавить в корзину"
                        className="basket-button"
                    >
                        <img src={basket} alt="Корзина" />
                    </button>
                </div>
            </div>
            
            <div className="main-middle-card">
                <h3 className="product-title">{product.title}</h3>
                {product.quantityInLot && (
                    <p className="product-quantity">От {product.quantityInLot} шт.</p>
                )}
            </div>
            
            <div className="footer-low-card">
                <NavLink 
                    to={`/products/${product.id}`} 
                    className="details-button"
                >
                    Подробнее
                </NavLink>
                <div className="price-container">
                    <span className="price-label">Цена:</span>
                    <span className="price-value">{product.price}₽</span>
                </div>
            </div>
        </div>
    );
};