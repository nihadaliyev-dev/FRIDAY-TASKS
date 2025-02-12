import PropTypes from "prop-types";
import AdminProductsTable from "./AdminProductsTable";
// import { deleteProductAsync } from "../../../services/services";

const Products = ({ products, setProducts }) => {
  return (
    <section className="flex justify-center">
      <div className="container">
        <div className="py-3">
          <div className="text-3xl font-bold py-5 products__header">
            Products
          </div>
          <div>
            <AdminProductsTable
              products={products}
              setProducts={setProducts}
            ></AdminProductsTable>
            {/* <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.rating.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default Products;
