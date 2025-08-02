import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes"
import { SidebarProvider } from "./Context/SidebarContext"
import { CategoryProvider } from "./Context/CategoryContext"
import { FavoritesProvider } from "./Context/FavoritesContext"
import { BasketProvider } from "./Context/BasketContext"

function App() {

  return (
    <>
      <BrowserRouter>
        <BasketProvider>
        <FavoritesProvider>
        <CategoryProvider>
        <SidebarProvider>
         <AppRoutes />
        </SidebarProvider>
        </CategoryProvider>
        </FavoritesProvider>
        </BasketProvider>
      </BrowserRouter>
    </>
  )
}

export default App
