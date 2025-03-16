import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, endpoints } from "../../constants/constants";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `${endpoints.products}`,
    }),
    getProductByID: builder.query({
      query: (id) => `${endpoints.products}/${id}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: `${endpoints.products}`,
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useAddProductMutation,
} = productApi;
