import PropTypes from "prop-types";
const AdminProductsDeleteBtn = ({ onClick }) => (
  <button
    className="cursor-pointer py-1 px-2 bg-red-500 rounded-md text-white"
    onClick={onClick}
  >
    Delete
  </button>
);
AdminProductsDeleteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AdminProductsDeleteBtn;
