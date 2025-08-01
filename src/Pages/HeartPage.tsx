import type { FC } from "react";
import { useFavorites } from "../Context/FavoritesContext";
import { ProductCard } from "../components/Cards/ProductCard";

export const FavoritesPage: FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Избранное</h2>
      <div className="products-grid">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};