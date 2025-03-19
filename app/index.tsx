import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";

import { useProductsStore } from "../store/useProductsStore";
import ProductItem from "../components/ProductItem";
import Button from "../components/Button";
import { Colors } from "../utils/Colors";
import SearchBar from "../components/SearchBar";

const ProductListScreen: React.FC = () => {
  const { products, fetchProducts } = useProductsStore();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.id.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={{ flex: 1, padding: 16 }}
    >
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Buscar productos..."
      />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <Link href={`/products/${item.id}`}>
            <ProductItem product={item} />
          </Link>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={() => router.push("/products/add")}>
        <Text
          style={{ color: Colors.text_blue, fontSize: 16, fontWeight: "bold" }}
        >
          Agregar
        </Text>
      </Button>
    </KeyboardAvoidingView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
});
