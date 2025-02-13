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

const addNewProductAsync = async (title, description, image, price) => {
  const newProduct = {
    title,
    description,
    image,
    price,
  };
  try {
    const response = axios.post(
      `${BASE_URL}/${endpoints.products}`,
      newProduct
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { getProducts, getProductsById, deleteProductAsync, addNewProductAsync };
