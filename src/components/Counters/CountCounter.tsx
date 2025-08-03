import { useEffect, useState, type FC } from "react";
import '../../styles/Counters.css';

export const CountCounter:FC = () => {
    const [count, setCount] = useState<number>(0);
    const target = 89;

    useEffect(() => {
        const increment = 0.1;
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev < target) {
                    return Math.min(prev + increment, target);
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 5);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-card">
            <div className="counter-number accent-text">{count.toFixed(0)}+</div>
            <div className="counter-description">Категорий различных товаров</div>
        </div>
    );
};