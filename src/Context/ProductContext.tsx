import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProduct } from "../types";

interface ProductContextType{
    selectedProduct:IProduct | null
    setSelectedProduct:(product:IProduct)=>void
}

const ProductContext = createContext<ProductContextType>({
  selectedProduct:null,
  setSelectedProduct:()=>{}
})

export const ProductProvider:FC<{children:ReactNode}> = ({children}) => {

    const [selectedProduct,setSelectedProduct] = useState<IProduct | null>(null)

    return (
        <ProductContext.Provider value={{selectedProduct,setSelectedProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)