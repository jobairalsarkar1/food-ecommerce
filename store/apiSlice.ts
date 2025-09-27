import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Category,
  Product,
  User,
  ApiResponse,
  RegisterRequest,
  LoginRequest,
  LoginResponse,
  UserProfile,
} from "@/lib/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1/",
  }),
  endpoints: (builder) => ({
    // Categories
    getCategories: builder.query<Category[], void>({
      query: () => "category",
      transformResponse: (response: ApiResponse<Category[]>) => response.data,
    }),

    // Products
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      transformResponse: (response: ApiResponse<Product[]>) => response.data,
    }),

    // User registration
    registerUser: builder.mutation<ApiResponse<User>, RegisterRequest>({
      query: (body) => ({
        url: "users/register",
        method: "POST",
        body,
      }),
    }),

    // Login
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),

    // Get user profile
    getUserProfile: builder.query<UserProfile, string>({
      query: (token) => ({
        url: "auth/profile",
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLazyGetUserProfileQuery,
} = apiSlice;
