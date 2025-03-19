import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";

import { useProductsStore } from "../store/useProductsStore";
import ProductItem from "../components/ProductItem";
import Button from "../components/Button";
import { Colors } from "../utils/Colors";

const ProductListScreen: React.FC = () => {
  const { products, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Link href={`/products/${item.id}`}>
            <ProductItem product={item} />
          </Link>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={() => {}}>
        <Text
          style={{ color: Colors.text_blue, fontSize: 16, fontWeight: "bold" }}
        >
          Agregar
        </Text>
      </Button>
    </View>
  );
};

export default ProductListScreen;
