import axios from "axios";
import { BASE_URL, endpoints } from "../constants";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/${endpoints.products}`);
  const data = response.data;
  return data;
};

const getProductsById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoints.products}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteProductAsync = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/${endpoints.products}/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export { getProducts, getProductsById, deleteProductAsync };
