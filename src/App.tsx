import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes"
import { SidebarProvider } from "./Context/SidebarContext"
import { CategoryProvider } from "./Context/CategoryContext"

function App() {

  return (
    <>
      <BrowserRouter>
       <CategoryProvider>
        <SidebarProvider>
         <AppRoutes />
        </SidebarProvider>
       </CategoryProvider>
      </BrowserRouter>
    </>
  )
}

export default App
