import { useLocalSearchParams, router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useProductsStore } from "../../store/useProductsStore";
import { Product } from "../../types/products";
import Button from "../../components/Button";
import { Colors } from "../../utils/Colors";
import Modal from "../../components/Modal";
import { useState } from "react";

const DetailsItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <View style={styles.detailsItem}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const { products, deleteProduct } = useProductsStore();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return <Text>Producto no encontrado</Text>;
  }

  const handleDelete = () => {
    deleteProduct(product.id);
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ID: {product.id}</Text>
          <Text style={styles.headerSubText}>Información del producto</Text>
        </View>
        <View style={styles.infoContainer}>
          <DetailsItem label="Nombre" value={product.name} />
          <DetailsItem label="Descripción" value={product.description} />
          <View style={styles.logoContainer}>
            <Text>Logo:</Text>
            <Image
              source={require("../../assets/card.png")}
              style={styles.logo}
            />
          </View>
          <DetailsItem
            label="Fecha de liberacion"
            value={product.date_release}
          />
          <DetailsItem
            label="Fecha de revision"
            value={product.date_revision}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => router.push(`/products/edit?id=${product.id}`)}
          variant="secondary"
        >
          <Text style={styles.buttonText}>Editar</Text>
        </Button>
        <Button onPress={() => setShowDeleteModal(true)} variant="danger">
          <Text style={[styles.buttonText, { color: "white" }]}>Eliminar</Text>
        </Button>
      </View>

      <Modal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        message={`¿Estás seguro que deseas eliminar el producto ${product.name}?`}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    gap: 16,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerSubText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
  },
  buttons: {
    flexDirection: "column",
    gap: 16,
  },
  buttonText: {
    color: Colors.text_blue,
    fontSize: 16,
    fontWeight: "bold",
  },
  logoContainer: {
    flexDirection: "column",
    gap: 16,
  },
  logo: {
    resizeMode: "cover",
    width: "70%",
    height: 170,
    alignSelf: "center",
  },
  infoContainer: {
    flexDirection: "column",
    gap: 16,
    width: "90%",
    alignSelf: "center",
  },
  detailsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
