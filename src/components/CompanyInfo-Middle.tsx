import type { FC } from "react";
import { ResponseTimeCounter } from "./Counters/ResponseTimeCounter";
import { OrdersCounter } from "./Counters/OrdersCounter";
import { PercentCounter } from "./Counters/PercentCounter";
import { CountCounter } from "./Counters/CountCounter";
import '../styles/CompanyInfoMiddle.css'

export const CompanyInfoMiddle:FC = () => {
    return (
        <section className="company-stats-section">
            <div className="stats-header">
                <h2 className="stats-title">ЛУЧШЕ<br />ВО ВСЕМ</h2>
            </div>
            <div className="stats-counters-grid">
                <ResponseTimeCounter />
                <OrdersCounter />
                <PercentCounter />
                <CountCounter />
            </div>
        </section>
    );
};