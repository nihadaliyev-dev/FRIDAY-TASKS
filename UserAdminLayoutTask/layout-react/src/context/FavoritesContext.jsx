import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FavoritesContext = createContext([]);

const FavoritesProvider = ({ children }) => {
  const storedProds = localStorage.getItem("favoriteProds") || [];

  const [favoriteProds, setFavoriteProds] = useState(storedProds);

  const toggleFavorites = (book) => {
    const idx = favoriteProds.findIndex((favProd) => favProd.id === book.id);

    console.log(favoriteProds);
    if (idx === -1) {
      setFavoriteProds([...favoriteProds, book]);
    } else {
      setFavoriteProds(
        favoriteProds.filter((favProd) => favProd.id !== book.id)
      );
    }
    // localStorage.setItem("favoriteProds", favoriteProds);
  };

  const clearAllFavs = () => {
    setFavoriteProds([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteProds, toggleFavorites, clearAllFavs }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.any,
};

export default FavoritesProvider;
