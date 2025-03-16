import {
  useAddProductMutation,
  useGetAllProductsQuery,
  // useGetProductByID,
} from "../../redux/services/productsApi";

const Home = () => {
  const res = useGetAllProductsQuery();
  console.log(res);

  // const { data, isLoading, error } = useGetProductByID();
  // const res2 = useAddProductMutation({ title: "salam" });
  const [addPost] = useAddProductMutation();

  return (
    <div className="pt-20">
      Home
      <button onClick={() => addPost({ title: "Salam" })}>Salam</button>
    </div>
  );
};

export default Home;
