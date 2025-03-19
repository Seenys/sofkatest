import { create } from "zustand";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/api";
import { Product } from "../types/products";

interface ProductsStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (id: string, product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    const data = await getProducts();
    set({ products: data });
  },
  addProduct: async (product) => {
    await createProduct(product);
    const data = await getProducts();
    set({ products: data });
  },
  updateProduct: async (id, product) => {
    await updateProduct(id, product);
    const data = await getProducts();
    set({ products: data });
  },
  deleteProduct: async (id) => {
    await deleteProduct(id);
    const data = await getProducts();
    set({ products: data });
  },
}));
