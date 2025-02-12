import PropTypes from "prop-types";
import { Link } from "react-router";
const Products = ({ products }) => {
  return (
    <>
      <section className="flex justify-center py-8 products">
        <div className="container">
          <div className="grid gap-5 grid-cols-5">
            {products.map((product) => (
              <Link
                to={`${product.id}`}
                className="p-4 shadow-lg rounded-lg"
                key={product?.id}
              >
                <img src={product?.image} alt={product?.title} />
                <p>{product?.title}</p>
                <p>{product?.price}</p>
                <p>{product?.rating.rate}</p>
              </Link>
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
