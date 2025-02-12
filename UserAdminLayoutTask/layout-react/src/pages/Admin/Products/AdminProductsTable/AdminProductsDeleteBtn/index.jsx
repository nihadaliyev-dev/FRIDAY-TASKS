import PropTypes from "prop-types";
import { BASE_URL, endpoints } from "../../../../../constants";
import axios from "axios";

const AdminProductsDeleteBtn = ({ id, products }, setProducts) => {
  const handleDeleteBtnAsync = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${endpoints.products}/${id}`);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="cursor-pointer py-1 px-2 bg-red-500 rounded-md text-white"
      onClick={() => handleDeleteBtnAsync(id)}
    >
      Delete
    </button>
  );
};

AdminProductsDeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default AdminProductsDeleteBtn;
