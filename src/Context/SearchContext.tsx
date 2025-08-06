import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import type { IProduct } from "../types";
import { products } from "../data";

interface SearchContextType{
    searchQuery: string;
    setSearchQuery:(query:string) => void
    searchResults: IProduct[];
    performSearch: (query: string) => void;

}

const SearchContext = createContext<SearchContextType>({
  searchQuery:'',
  setSearchQuery:()=>{},
  searchResults:[],
  performSearch:()=>{}
})

export const SearchProvider:FC<{children:ReactNode}> = ({children}) => {

    const [searchQuery,setSearchQuery] = useState('')
    const [searchResults,setSearchResults] = useState<IProduct[]>([])

    const performSearch = (query:string) => {
        setSearchQuery(query)

        const filterProducts = products.filter(product=>
           product.title.toLowerCase().includes(query.toLowerCase())
        || product.description.toLowerCase().includes(query.toLowerCase())
        )

        setSearchResults(filterProducts)
    }

    return (
        <SearchContext.Provider value={{searchQuery,setSearchQuery,searchResults,performSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext)