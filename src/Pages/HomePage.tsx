import type { FC } from "react";
import { Poster } from "../components/Poster";
import { MostPopularProducts } from "../components/MostPopularProducts";
import { CompanyInfoTop } from "../components/CompanyInfo-Top";
import { CompanyInfoMiddle } from "../components/CompanyInfo-Middle";


export const HomePage:FC = () => {
    return (
        <>
            <div className="card">
                <Poster />
            </div>
            <div className="card">
                <MostPopularProducts />
            </div>
            <div className="card">
                <CompanyInfoTop />
            </div>
            <div className="card">
                <CompanyInfoMiddle />
            </div>
        </>
        
        
    )
}