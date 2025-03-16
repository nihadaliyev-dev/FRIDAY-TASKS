import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

import ThemeProvider from "./context/ThemeContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";
import CartProductsProvider from "./context/CartProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <FavoritesProvider>
        <CartProductsProvider>
          <App />
        </CartProductsProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </BrowserRouter>
);
