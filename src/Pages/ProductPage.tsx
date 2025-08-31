import { useEffect, useState, type FC } from "react";
import { useProduct } from "../Context/ProductContext";
import { useParams, Link } from "react-router-dom";
import { products } from "../data";
import { useBasket } from "../Context/BasketContext";
import type { IProduct } from "../types";
import '../styles/ProductPage.css'

import galka from '../../public/GALOCHKA.svg'
import krestik from '../../public/KREST.svg'
import telegramIcon from '../../public/TELEGRAM.png'
import vkIcon from '../../public/VK.png'
import { ImageWithFallback } from "../components/ImageWithFallback";

export const ProductPage:FC = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams<{id:string}>()
    const {selectedProduct} = useProduct()
    const { basketArray, addBasket, updateQuantity } = useBasket();

    const currentProduct = products.find(item => item.id === Number(id)) || selectedProduct
    const itemInBasket = basketArray.find(item => item.id === currentProduct?.id)

    useEffect(()=>{
        if(itemInBasket){
            setQuantity(itemInBasket.quantity ?? 1)
        } else {
            setQuantity(1)
        }
    },[itemInBasket])

    const handleQuantityChange = (newQuantity:number) => {
        if (newQuantity < 1) return;
        setQuantity(newQuantity);

        if(currentProduct){
            if(itemInBasket){
                updateQuantity(currentProduct.id, newQuantity)
            } else {
                const cartItem: IProduct = {
                    ...currentProduct,
                    quantity:newQuantity
                }
                addBasket(cartItem);
            }
        }
    }

    if(!currentProduct) return <div className="product-not-found">Продукт не найден</div>

    return (
        <section className="product-page">
            <div className="product-container">
                <div className="images-and-infoBlock">
                    <div className="product-images">
                        <ImageWithFallback 
                            className="main-image" 
                            src={currentProduct.images[0]} 
                            alt="Основное изображение товара"
                            fallbackSrc="https://placehold.co/800x600?text=Основное+изображение+не+загружено"
                        />
                        <div className="mini-images">
                            {currentProduct.images.slice(1).map((img, index) => (
                                img && <ImageWithFallback 
                                    key={index} 
                                    src={img} 
                                    alt={`Дополнительное изображение ${index + 1}`}
                                    fallbackSrc="https://placehold.co/150x150?text=Изображение+не+загружено"
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="product-info">
                        <div className="product-header">
                            <div className="product-isStock">
                                <img src={currentProduct.inStock ? galka : krestik} alt="Статус наличия" />
                                <span style={{color: currentProduct.inStock ? '#00aa07' : '#ff1100'}}>{currentProduct.inStock ? 'В наличии' : 'Нет в наличии'}</span>
                            </div>
                            <h1 className="product-title-page">{currentProduct.title}</h1>
                        </div>

                        <div className="product-price-section">
                            <div className="quantity-selector">
                                <button className="quantity-btn minus" onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                                <span className="quantity-value">{quantity}</span>
                                <button className="quantity-btn plus" onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                            </div>
                            <div className="price-block">
                                <span className="price">{currentProduct.price * quantity}₽</span>
                                <span className="price-per-item">{currentProduct.price}₽/шт</span>
                            </div>
                        </div>

                        <div className="product-actions">
                            <button 
                                className={`add-to-cart-btn ${itemInBasket ? 'in-cart' : ''}`}
                                onClick={() => handleQuantityChange(quantity)}
                            >
                                {itemInBasket ? 'Обновить корзину' : 'Добавить в корзину'}
                            </button>
                            <p className="stock-available">Доступно {currentProduct.quantityInLot} шт.</p>
                            <Link to="/basket" className="go-to-cart-link">Перейти в корзину →</Link>
                        </div>
                    </div>
                </div>

                <div className="description-and-help">
                    <div className="product-description">
                        <h3 className="description-title">Описание товара</h3>
                        <p className="description-text">{currentProduct.description}</p>
                    </div>

                    <div className="help-block">
                        <h3 className="help-title">Нужна помощь с заказом?</h3>
                        <p className="help-text">Позвоните по номеру: 
                            <a href="tel:+79049337054" className="phone-link"> +7 937 074 48 77</a>
                        </p>
                        <div className="social-links">
                            <p className="social-text">Или просто напишите нам в чате:</p>
                            <div className="social-icons">
                                <a href="https://t.me/mirzap63" className="social-icon">
                                    <img src={telegramIcon} alt="Telegram" />
                                </a>
                                <a href="https://vk.com/mirzap63" className="social-icon">
                                    <img src={vkIcon} alt="VK" />
                                </a>
                            </div>
                        </div>
                        <div className="work-hours">
                            <p className="hours-office">График работы Офис: Пн-Пт 7:00-15:00 МСК</p>
                            <p className="hours-shop">Магазины: Пн-Вс 7:00-21:00 МСК</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}