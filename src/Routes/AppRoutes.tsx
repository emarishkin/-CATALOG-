import type { FC } from "react";
import { Header } from "../components/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { useSidebar } from "../Context/SidebarContext";
import { HomePage } from "../Pages/HomePage";

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
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    );
};