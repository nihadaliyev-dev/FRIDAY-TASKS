import { useParams } from "react-router";
import { getProductsById } from "../../../services/services";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleGetProductByIdAsync = async (id) => {
    const response = await getProductsById(id);
    const data = response.data;
    setProduct(data);
    return data;
  };

  // useEffect(() => {
  //   handleGetProductByIdAsync(id).then(setProduct);
  //   setIsLoading(false);
  // }, [id]);

  useEffect(() => {
    handleGetProductByIdAsync(id);
    setIsLoading(false);
  }, [id]);

  // useEffect(() => {
  //   handleGetProductByIdAsync(id).then((data) => setProduct(data));
  //   setIsLoading(false);
  // }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex justify-center py-20">
      <div className="container">
        <div>
          {product && (
            <div className="flex gap-10 items-center">
              <div>
                <img
                  className="shadow-lg p-5 rounded-xl"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5 w-1/2">
                <div className="text-3xl font-bold">{product.title}</div>
                <div>{product.description}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
