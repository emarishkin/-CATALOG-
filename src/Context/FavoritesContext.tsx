import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProduct } from "../types";

interface FavoritesContextType{
    favorites:IProduct[]
    addToFavotites:(product:IProduct)=>void
    deleteFromFavotites:(productId:number)=>void
    isFavotite:(productId:number)=>boolean
}

const FavoritesContext = createContext<FavoritesContextType>({
    favorites:[],
    addToFavotites:()=>{},
    deleteFromFavotites:()=>{},
    isFavotite:()=>false
})

 export const FavoritesProvider:FC<{children:ReactNode}> = ({children}) => {

    const [favorites,setFavorites] = useState<IProduct[]>([])

    const addToFavotites = (product:IProduct) => {
     setFavorites(prev=>[...prev,product])
    }

    const deleteFromFavotites = (productId:number) => {
      setFavorites(prev=>prev.filter(item=>item.id !== productId))
    }

    const isFavotite = (productId:number) => {
      return favorites.some(item => item.id === productId)
    }

    return (
        <FavoritesContext.Provider value={{favorites,addToFavotites,deleteFromFavotites,isFavotite}}>
            {children}
        </FavoritesContext.Provider>
    )
 } 

 export const useFavorites = () => useContext(FavoritesContext)