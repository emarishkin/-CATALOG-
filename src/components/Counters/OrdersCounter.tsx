import { useEffect, useState, type FC } from "react";
import '../../styles/Counters.css';

export const OrdersCounter:FC = () => {
    const [count, setCount] = useState<number>(0);
    const target = 471;

    useEffect(() => {
        const increment = 1;
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev < target) {
                    return Math.min(prev + increment, target);
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-card">
            <div className="counter-number accent-text">{count.toLocaleString()}</div>
            <div className="counter-description">Довольных клиентов</div>
        </div>
    );
};