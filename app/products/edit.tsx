import { Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useProductsStore } from "../../store/useProductsStore";
import { ProductFormData } from "../../utils/schema";
import ProductForm from "../../components/ProductForm";

const EditProductScreen = () => {
  const { id } = useLocalSearchParams();
  const { products, updateProduct } = useProductsStore();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const handleSubmit = (data: ProductFormData) => {
    updateProduct(product.id, data);
    router.back();
  };

  return (
    <View>
      <ProductForm onSubmit={handleSubmit} initialValues={product} />
    </View>
  );
};

export default EditProductScreen;
