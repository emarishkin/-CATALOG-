import { useState, useRef, useEffect } from "react";
import type { FC } from "react";
import urus from '../../public/URUS.png';
import '../styles/Poster.css'
import { Link } from "react-router-dom";

export const Poster: FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const carRef = useRef<HTMLImageElement>(null);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    if (carRef.current) {
      carRef.current.style.transform = 'translateX(0) rotate(0)';
      carRef.current.style.opacity = '1';
      carRef.current.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
    }
  };

  useEffect(() => {
    const carElement = carRef.current;
    if (carElement) {
      carElement.addEventListener('animationend', handleAnimationEnd);
      return () => {
        carElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsAnimating(true);
    }
  };

  return (
    <section className="poster">
      <div className="poster-content">
        <div className="poster-text">
          <div className="poster-discount">20% Скидка</div>
          <div className="poster-subtitle">Это бестселлер 2024</div>
          <h1 className="poster-title">ГЕРМЕТИК-ПРОКЛАДКА «АВТОСИЛ 11225» ЧЕРНЫЙ, 60 Г<br />Подойдем для любого автомобиля</h1>
          <Link className="poster-button" to={'/products/22'}>Купить сейчас</Link>
        </div>
        <div className="poster-image">
          <img 
            ref={carRef}
            src={urus} 
            alt="Lamborghini Urus" 
            className={`car-image ${isAnimating ? 'animate' : ''}`}
            onMouseEnter={handleMouseEnter}
          />
        </div>
      </div>
    </section>
  );
};