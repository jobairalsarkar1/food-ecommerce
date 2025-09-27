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
