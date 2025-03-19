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
import {
  ProductFormData,
  createProductSchema,
  editProductSchema,
} from "../utils/schema";
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
  const isEditing = !!initialValues?.id;

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(isEditing ? editProductSchema : createProductSchema),
    defaultValues: initialValues,
  });

  const handleReset = () => {
    reset();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isEditing ? "Editar" : "Crear"} Registro
      </Text>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 10 }}
        >
          <FormFields
            control={control}
            errors={errors}
            isEditing={isEditing}
            setValue={setValue}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {isSubmitting ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Button onPress={handleSubmit(onSubmit)} variant="primary">
            <Text>Guardar</Text>
          </Button>
          {!isEditing && (
            <Button onPress={handleReset} variant="secondary">
              <Text>Reiniciar</Text>
            </Button>
          )}
        </View>
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
