import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link } from "react-router";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../../context/FavoritesContext";
import { CartProductsContext } from "../../../context/CartProductsContext";

const Products = ({ products }) => {
  const [inputValue, setInputValue] = useState("");

  const { favoriteProds, toggleFavorites } = useContext(FavoritesContext);

  const { cartProducts, toggleCartProducts } = useContext(CartProductsContext);

  console.log(cartProducts);

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

          <div className="grid gap-5 grid-cols-4">
            {products.map((product) => (
              <div
                key={product?.id}
                className="p-4 shadow-lg rounded-lg relative flex flex-col gap-1"
              >
                <button
                  className="absolute p-2 right-2 z-2"
                  onClick={() => {
                    toggleFavorites(product);
                  }}
                >
                  {favoriteProds.includes(product) ? (
                    <FaHeart className="text-red-500 hover:scale-110 transition-all duration-200" />
                  ) : (
                    <FaRegHeart className="text-red-500 hover:scale-110 transition-all duration-200" />
                  )}
                </button>
                <Link className="flex flex-col gap-1" to={`${product.id}`}>
                  <img
                    className="p-3 object-contain aspect-square"
                    src={product?.image}
                    alt={product?.title}
                  />
                  <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {product?.title}
                  </p>
                  <p className="text-[12px] text-gray-[#414141]">
                    Rating: {product?.rating?.rate}
                  </p>
                  <p className="text-[16px] text-gray-[#414141] font-bold">
                    ${product?.price}
                  </p>
                </Link>

                <button
                  className="cursor-pointer border-1 bg-black flex rounded-lg w-full text-white py-2 justify-center"
                  onClick={() => toggleCartProducts(product)}
                >
                  Add to cart
                </button>
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
