import type { FC } from "react";
import { Header } from "../components/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { useSidebar } from "../Context/SidebarContext";
import { HomePage } from "../Pages/HomePage";
import { CategoryPage } from "../Pages/CategoryPage";
import { FavoritesPage } from "../Pages/HeartPage";
import { ROUTES } from "../utils/routes";
import { BasketPage } from "../Pages/BasketPage";
import { ContactWithYou } from "../components/ContactWithYou";
import { CompanyPage } from "../Pages/CompanyPage";
import { ProductPage } from "../Pages/ProductPage";
import { ContactsPage } from "../Pages/ContactsPage";
import { CatalogCategories } from "../Pages/CatalogCategories";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { OrderSuccessPage } from "../Pages/OrderSuccessPage";

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
                        <Route path={ROUTES.INFO} element={<CompanyPage />} />
                        <Route path="/categories/:id" element={<CategoryPage />} />
                        <Route path="/heart" element={<FavoritesPage />} />
                        <Route path={ROUTES.BASKET} element={<BasketPage />} />
                        <Route path={ROUTES.PRODUCTS} element={<ProductPage />} />
                        <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
                        <Route path={ROUTES.CATALOG} element={<CatalogCategories />} />
                        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
                        <Route path={ROUTES.ORDER_SUCCESS} element={<OrderSuccessPage />} />
                    </Routes>
                </div>
            </div>
            <ContactWithYou />
            <Footer />
        </>
    );
};