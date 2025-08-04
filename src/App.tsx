import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes"
import { SidebarProvider } from "./Context/SidebarContext"
import { CategoryProvider } from "./Context/CategoryContext"
import { FavoritesProvider } from "./Context/FavoritesContext"
import { BasketProvider } from "./Context/BasketContext"
import { ProductProvider } from "./Context/ProductContext"
import { ScrollToTop } from "./utils/ScrollToTop"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductProvider>
        <BasketProvider>
        <FavoritesProvider>
        <CategoryProvider>
        <SidebarProvider>
          <ScrollToTop>
            <AppRoutes />
          </ScrollToTop>
        </SidebarProvider>
        </CategoryProvider>
        </FavoritesProvider>
        </BasketProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
