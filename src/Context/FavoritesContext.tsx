import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProduct } from "../types";

interface FavoritesContextType{
    favorites:IProduct[]
    addToFavorites:(product:IProduct)=>void
    deleteFromFavorites:(productId:number)=>void
    isFavorite:(productId:number)=>boolean
}

const FavoritesContext = createContext<FavoritesContextType>({
    favorites:[],
    addToFavorites:()=>{},
    deleteFromFavorites:()=>{},
    isFavorite:()=>false
})

 export const FavoritesProvider:FC<{children:ReactNode}> = ({children}) => {

    const [favorites,setFavorites] = useState<IProduct[]>([])

    const addToFavorites = (product:IProduct) => {
     setFavorites(prev=>[...prev,product])
    }

    const deleteFromFavorites = (productId:number) => {
      setFavorites(prev=>prev.filter(item=>item.id !== productId))
    }

    const isFavorite = (productId:number) => {
      return favorites.some(item => item.id === productId)
    }

    return (
        <FavoritesContext.Provider value={{favorites,addToFavorites,deleteFromFavorites,isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
 } 

 export const useFavorites = () => useContext(FavoritesContext)