import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes"
import { SidebarProvider } from "./Context/SidebarContext"
import { CategoryProvider } from "./Context/CategoryContext"
import { FavoritesProvider } from "./Context/FavoritesContext"

function App() {

  return (
    <>
      <BrowserRouter>
        <FavoritesProvider>
        <CategoryProvider>
        <SidebarProvider>
         <AppRoutes />
        </SidebarProvider>
        </CategoryProvider>
        </FavoritesProvider>
      </BrowserRouter>
    </>
  )
}

export default App
