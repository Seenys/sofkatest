import axios from "axios";
import { Platform } from "react-native";
import { Product } from "../types/products";

// Handle different environments
const getBaseUrl = () => {
  if (Platform.OS === "android") {
    // Android emulator uses 10.0.2.2 to access host machine's localhost
    return "http://10.0.2.2:3002/bp";
  }
  // iOS can use localhost directly
  return "http://localhost:3002/bp";
};

const BASE_URL = getBaseUrl();

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data.data;
};

const createProduct = async (product: Product) => {
  console.log(product, "product");
  const response = await axios.post(`${BASE_URL}/products`, product);
  console.log(response, "response");
  return response.data.data;
};

const updateProduct = async (id: string, product: Product) => {
  const response = await axios.put(`${BASE_URL}/products/${id}`, product);
  return response.data.data;
};

const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/products/${id}`);
  return response.data.data;
};

const verifyProductId = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/verification/${id}`);

  return response.data;
};

export {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  verifyProductId,
};
