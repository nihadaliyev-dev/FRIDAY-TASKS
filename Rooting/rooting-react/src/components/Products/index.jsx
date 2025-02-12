import axios from "axios";
import { BASE_URL, endpoints } from "../../constants/constants";

const Products = () => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/${endpoints.products}`);
    setProducts(response.data);
  };
  getProducts();
  return;
};
export default Products;
