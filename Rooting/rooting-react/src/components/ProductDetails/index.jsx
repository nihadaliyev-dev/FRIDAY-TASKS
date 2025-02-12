import { useNavigate, useParams } from "react-router";

const ProductDetails = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigation(-1);
          }}
        >
          Go Back
        </button>
      </div>
      <div>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
