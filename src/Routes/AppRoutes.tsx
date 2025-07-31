import type { FC } from "react"
import { Header } from "../components/Header"
import { Routes } from "react-router-dom"
import { Footer } from "../components/Footer"
import { SideBar } from "../components/SideBar"

export const AppRoutes:FC = () => {
    return (
        <>
        <Header />
            <div className="main-content">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="content">
                    <Routes>
                        {/* <Route index element={<HomePage />} /> */}
                    </Routes>
                </div>
            </div>
        <Footer />
        </>
    )
}