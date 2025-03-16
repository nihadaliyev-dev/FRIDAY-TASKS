import axios from "axios";
import { BASE_URL, endpoints } from "../constants";

const editDataById = async (endpoint, id, payload) => {
  try {
    const response = await axios.put(
      `${BASE_URL}${endpoints.products}/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { editDataById };
