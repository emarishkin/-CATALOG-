import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./Routes/AppRoutes"
import { SidebarProvider } from "./Context/SidebarContext"

function App() {

  return (
    <>
      <BrowserRouter>
       <SidebarProvider>
        <AppRoutes />
       </SidebarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
