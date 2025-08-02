import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { ICartItem, IProduct } from "../types";


interface BasketContextType{
  basketArray:ICartItem[]
  basketCount:number
  basketTotal:number
  basketCountNUM:number,
  addBasket:(product:IProduct) => void
  deleteFromBasket:(productId:number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearBasket:()=>void
}

const BasketContext = createContext<BasketContextType>({
  basketArray:[],
  basketCount:0,
  basketTotal:0,
  basketCountNUM:0,
  addBasket:() => {},
  deleteFromBasket:() => {},
  updateQuantity: () => {},
  clearBasket:() => {}
})

export const BasketProvider:FC<{children:ReactNode}> = ({children}) => {

    const [basketArray,setBasketArray] = useState<ICartItem[]>([])

    const basketCount = basketArray.reduce((acc,item)=> acc + item.quantity, 0) 

    const basketTotal = basketArray.reduce((acc,item)=> acc + (item.price * item.quantity),0)

    const basketCountNUM = basketArray.length

    const addBasket = (product:IProduct) => {
        setBasketArray(prev => {
            const existingBasket = prev.find(item => item.id === product.id)
            if(existingBasket){
                return prev.map(item => item.id === product.id 
                   ? {...item, quantity: item.quantity + 1 }
                   : item
                )
            }
            return [...prev,{...product,quantity:1}]
        })
    }

    const updateQuantity = (productId:number, quantity:number) => {
      if (quantity < 1) {
        deleteFromBasket(productId);
        return;
      }
      setBasketArray(prev => 
        prev.map(item => item.id === productId
            ? {...item,quantity}
            : item
        )
      )
    }

    const deleteFromBasket = (productId:number) => {
        setBasketArray(prev=>prev.filter(item => item.id !== productId)) 
    }

    const clearBasket = () => {
        setBasketArray([])
    }

    return (
        <BasketContext.Provider value={{basketArray,basketCount,basketTotal,basketCountNUM,addBasket,deleteFromBasket,updateQuantity,clearBasket}}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => useContext(BasketContext)