import React from "react";
import { View } from "react-native";
import { useProductsStore } from "../../store/useProductsStore";
import { Product } from "../../types/products";
import ProductForm from "../../components/ProductForm";
import { useRouter } from "expo-router";

const AddProductScreen: React.FC = () => {
  const { addProduct } = useProductsStore();
  const router = useRouter();

  const handleSubmit = (product: Product) => {
    addProduct(product);
    router.push("/");
  };

  return (
    <View>
      <ProductForm onSubmit={handleSubmit} />
    </View>
  );
};

export default AddProductScreen;
