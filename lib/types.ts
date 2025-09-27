export interface Category {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DecoratedProduct {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

export interface UserProfile {
  success: boolean;
  message: string;
  data: {
    id: string;
    userName: string | null;
    email: string;
    profileImage: string | null;
    phoneNumber: string | null;
    createdAt: string;
    updatedAt: string;
  };
}