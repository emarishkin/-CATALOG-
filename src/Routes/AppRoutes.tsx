import type { FC } from "react";
import { Header } from "../components/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { useSidebar } from "../Context/SidebarContext";
import { HomePage } from "../Pages/HomePage";
import { CategoryPage } from "../Pages/CategoryPage";

export const AppRoutes: FC = () => {
    const { isSidebarOpen, closeSidebar } = useSidebar();

    return (
        <>
            <Header />
            <div className="main-content-wrapper">
                <SideBar />
                <div 
                    className={`content-overlay ${isSidebarOpen ? 'active' : ''}`} 
                    onClick={closeSidebar} 
                />
                <div className="content">
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/categories/:id" element={<CategoryPage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    );
};