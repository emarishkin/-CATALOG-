import { useEffect, type FC } from "react";
import { Header } from "../components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { SearchPage } from "../Pages/SearchPage";

export const AppRoutes: FC = () => {
    const { isSidebarOpen, closeSidebar } = useSidebar();
    const location = useLocation();

    useEffect(() => {
        const body = document.body;
        
        body.classList.remove(
            "page-home",
            "page-company",
            "page-contacts",
            "page-catalog",
            "page-category",
            "page-checkout",
            "page-products",
            "page-search"
        );

        if (location.pathname === ROUTES.HOME) {
            body.classList.add("page-home");
        } else if (location.pathname === ROUTES.INFO) {
            body.classList.add("page-company");
        } else if (location.pathname === ROUTES.CONTACTS) {
            body.classList.add("page-contacts");
        } else if (location.pathname === ROUTES.CATALOG) {
            body.classList.add("page-catalog");
        } else if (location.pathname.startsWith("/categories/")) {
            body.classList.add("page-category");
        } else if (location.pathname === ROUTES.CHECKOUT) {
            body.classList.add("page-checkout");
        } else if (location.pathname.startsWith('/products/')) {
            body.classList.add("page-products");
        } else if (location.pathname === ROUTES.SEARCH) {
            body.classList.add("page-search");
        } else if (location.pathname === ROUTES.BASKET) {
            body.classList.add("page-basket");
        } else if (location.pathname === ROUTES.HEART) {
            body.classList.add("page-heart");
        }
        

    }, [location.pathname]);

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
                        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
                    </Routes>
                </div>
            </div>
            <ContactWithYou />
            <Footer />
        </>
    );
};