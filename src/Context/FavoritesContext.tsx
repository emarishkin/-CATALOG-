import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProduct } from "../types";

interface FavoritesContextType{
    favorites:IProduct[]
    favoritesCount:number
    addToFavorites:(product:IProduct)=>void
    deleteFromFavorites:(productId:number)=>void
    isFavorite:(productId:number)=>boolean
}

const FavoritesContext = createContext<FavoritesContextType>({
    favorites:[],
    favoritesCount:0,
    addToFavorites:()=>{},
    deleteFromFavorites:()=>{},
    isFavorite:()=>false
})

 export const FavoritesProvider:FC<{children:ReactNode}> = ({children}) => {

    const [favorites,setFavorites] = useState<IProduct[]>([])

    const favoritesCount = favorites.length

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
        <FavoritesContext.Provider value={{favorites,favoritesCount,addToFavorites,deleteFromFavorites,isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
 } 

 export const useFavorites = () => useContext(FavoritesContext)