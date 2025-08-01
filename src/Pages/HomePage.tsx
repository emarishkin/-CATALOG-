import type { FC } from "react";
import { Poster } from "../components/Poster";
import { MostPopularProducts } from "../components/MostPopularProducts";


export const HomePage:FC = () => {
    return (
        <>
            <div className="card">
                <Poster />
            </div>
            <div className="card">
                <MostPopularProducts />
            </div>
        </>
        
        
    )
}