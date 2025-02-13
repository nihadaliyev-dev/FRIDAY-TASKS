import PropTypes from "prop-types";

const AdminProductsEditBtn = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer py-1 px-2 bg-blue-500 rounded-md text-white"
      onClick={onClick}
    >
      Edit
    </button>
  );
};

AdminProductsEditBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AdminProductsEditBtn;
