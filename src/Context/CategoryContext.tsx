import { createContext, useContext, useState, type FC, type ReactNode } from "react";

interface CategoryContextType {
    selectedCategory:number | null
    setSelectedCategory:(id:number | null)=>void
}

const CategoryContext = createContext<CategoryContextType>({
  selectedCategory:null,
  setSelectedCategory:()=>{}
})

export const CategoryProvider:FC<{children:ReactNode}> = ({children}) => {

   const [selectedCategory,setSelectedCategory] = useState<number | null>(null)

    return (
        <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}


export const useCategory = () => useContext(CategoryContext)