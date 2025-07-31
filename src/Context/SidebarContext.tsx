import { createContext, useContext, useState, type FC, type ReactNode } from "react";

interface SidebarContextType{
    isSidebarOpen:boolean
    toggleSidebar:()=>void
    closeSidebar:()=>void
}

const SidebarContext = createContext<SidebarContextType>({
    isSidebarOpen: false,
    toggleSidebar: () => {},
    closeSidebar: () => {},
})

export const SidebarProvider:FC<{children:ReactNode}> = ({children}) => {
    
    const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
    <SidebarContext.Provider value={{isSidebarOpen,toggleSidebar,closeSidebar}}>
        {children}
    </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)