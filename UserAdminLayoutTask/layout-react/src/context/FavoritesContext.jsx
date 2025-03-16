import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const FavoritesContext = createContext(null);

const FavoritesProvider = ({ children }) => {
  const storedProds = JSON.parse(localStorage.getItem("favoriteProds")) || [];
  
  const [favoriteProds, setFavoriteProds] = useState(storedProds);

  const toggleFavorites = (product) => {
    setFavoriteProds((prevFavs) => {
      const isExisting = prevFavs.some((favProd) => favProd.id === product.id);

      if (isExisting) {
        return prevFavs.filter((favProd) => favProd.id !== product.id);
      } else {
        return [...prevFavs, product];
      }
    });
  };

  const clearAllFavs = () => {
    setFavoriteProds([]);
  };

  // Sync favoriteProds with localStorage
  useEffect(() => {
    localStorage.setItem("favoriteProds", JSON.stringify(favoriteProds));
  }, [favoriteProds]);

  return (
    <FavoritesContext.Provider
      value={{ favoriteProds, toggleFavorites, clearAllFavs }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesProvider;
