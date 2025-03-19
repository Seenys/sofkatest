import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData, productSchema } from "../utils/schema";
import Button from "./Button";
import FormFields from "./FormFields";

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  initialValues?: ProductFormData;
}

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialValues,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {initialValues?.id ? "Editar" : "Crear"} Registro
      </Text>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 10 }}
        >
          <FormFields
            control={control}
            errors={errors}
            isEditing={!!initialValues?.id}
            setValue={setValue}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {isSubmitting ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Button onPress={handleSubmit(onSubmit)} variant="primary">
          <Text>Guardar</Text>
        </Button>
      )}
    </View>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
