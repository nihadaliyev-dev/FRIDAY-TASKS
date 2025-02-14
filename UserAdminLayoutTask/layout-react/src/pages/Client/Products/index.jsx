import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link } from "react-router";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../../context/FavoritesContext";

const Products = ({ products }) => {
  const [inputValue, setInputValue] = useState("");

  const { favoriteProds, toggleFavorites } = useContext(FavoritesContext);

  const handleSearch = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    setInputValue(searchValue);
  };

  return (
    <>
      <section className="flex justify-center py-8 products">
        <div className="container">
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleSearch(e)}
            />
          </div>

          <div className="grid gap-5 grid-cols-5">
            {products.map((product) => (
              <div
                key={product?.id}
                className="p-4 shadow-lg rounded-lg relative"
              >
                <button
                  className="absolute p-2 right-2 z-2"
                  onClick={() => {
                    toggleFavorites(product);
                  }}
                >
                  {favoriteProds.includes(product) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-red-500" />
                  )}
                </button>
                <Link to={`${product.id}`}>
                  <img
                    className="p-3"
                    src={product?.image}
                    alt={product?.title}
                  />
                  <p>{product?.title}</p>
                  <p>{product?.price}</p>
                  <p>{product?.rating?.rate}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
