import { useContext } from "react";
import { Link } from "react-router";
import { CartProductsContext } from "../../../context/CartProductsContext";

const Cart = () => {
  const { cartProducts, toggleCartProducts, clearAllCart } =
    useContext(CartProductsContext);
  if (cartProducts?.length === 0) {
    return (
      <section className="w-full h-full flex justify-center">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="py-5">
              <h4 className="text-3xl font-bold">Favorites</h4>
            </div>
            <div>
              <p className="font-semibold">
                Your wishlist is empty! Start adding your favorite products.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full h-full flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="py-6 flex self-end">
            <button
              onClick={clearAllCart}
              className="bg-red-500 px-2 py-1 rounded-md text-white"
            >
              Clear Favorites
            </button>
          </div>

          <div className="py-5">
            <h4 className="text-3xl font-bold">Favorites</h4>
          </div>
          <div>
            <ul className="grid grid-cols-4 gap-5">
              {cartProducts.map((prod) => (
                <li key={prod.id} className="shadow-lg p-5 rounded-lg">
                  <div className="relative">
                    <button
                      className="absolute"
                      onClick={() => {
                        toggleCartProducts(prod);
                      }}
                    ></button>
                    <Link to={`/products/${prod.id}`}>
                      <img src={prod.image} alt={prod.image} />
                      <p>{prod.title}</p>
                      <p>{prod.price}</p>
                      <p>{prod.rating.rate}</p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
