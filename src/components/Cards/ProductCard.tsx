import type { FC } from "react";
import type { IProduct } from "../../types";
import { Link, NavLink } from "react-router-dom";
import heart from '../../../public/HEART.png';
import basket from '../../../public/BAY.png';
import { ROUTES } from "../../utils/routes";
import '../../styles/ProductCard.css';
import galochka from '../../../public/GALOCHKA.svg';
import krestik from '../../../public/KREST.svg';

interface ProductCardProps {
    product: IProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
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
            
                <button 
                    className="favorite-button"
                >
                    <img 
                        src={heart} 
                        alt="Избранное" 
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
                    <Link 
                        to={ROUTES.BASKET} 
                        aria-label="Добавить в корзину"
                    >
                        <img src={basket} alt="Корзина" />
                    </Link>
                </div>
            </div>
            
            <div className="main-middle-card">
                <h3 className="product-title">{product.title}</h3>
                {product.quantityInLot && (
                    <p className="product-quantity">Лот: {product.quantityInLot} шт.</p>
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
                    <span className="price-value">{product.price}$</span>
                </div>
            </div>
        </div>
    );
};