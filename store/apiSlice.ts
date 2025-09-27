import { Category, Product } from "@/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1/" }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "category",
      transformResponse: (response: ApiResponse<Category[]>) => response.data,
    }),
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      transformResponse: (response: ApiResponse<Product[]>) => response.data,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = apiSlice;
