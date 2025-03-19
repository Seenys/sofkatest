import { View, Text, StyleSheet } from "react-native";
import { Product } from "../types/products";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { id, name } = product;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textId}>ID: {id}</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="right" size={20} color="gray" />
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  textId: {
    fontSize: 12,
    color: "gray",
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
