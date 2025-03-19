import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import {
  Control,
  Controller,
  useWatch,
  UseFormSetValue,
} from "react-hook-form";
import { ProductFormData } from "../utils/schema";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useState, useEffect } from "react";
import { formatDate, getRevisionDate } from "../utils/Date";

interface FormFieldsProps {
  control: Control<ProductFormData>;
  errors: Record<string, any>;
  isEditing?: boolean;
  setValue: UseFormSetValue<ProductFormData>;
}

interface FieldProps extends FormFieldsProps {
  name: keyof ProductFormData;
  label: string;
  isDate?: boolean;
  isDisabled?: boolean;
}

const Field = ({
  control,
  errors,
  isEditing,
  name,
  label,
  isDate,
  setValue,
  isDisabled,
}: FieldProps) => {
  const [show, setShow] = useState(false);

  const releaseDate = useWatch({
    control,
    name: "date_release",
  });

  useEffect(() => {
    if (name === "date_revision" && releaseDate) {
      const revisionDate = getRevisionDate(releaseDate);
      setValue("date_revision", revisionDate, { shouldValidate: true });
    }
  }, [releaseDate, name]);

  if (isDate) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          const currentDate = value ? new Date(value) : new Date();

          const handleDateChange = (event: any, selectedDate?: Date) => {
            setShow(false);
            if (event.type === "set" && selectedDate) {
              const formattedDate = formatDate(selectedDate);
              onChange(formattedDate);

              // If this is the release date, update revision date
              if (name === "date_release") {
                const revisionDate = getRevisionDate(formattedDate);
                setValue("date_revision", revisionDate, {
                  shouldValidate: true,
                });
              }
            }
          };

          return (
            <View style={styles.container}>
              <Text style={styles.label}>{label}</Text>
              <Pressable
                onPress={() => name !== "date_revision" && setShow(true)}
                style={[
                  styles.input,
                  {
                    borderColor: errors[name] ? "red" : "gray",
                    backgroundColor:
                      name === "date_revision" ? "#f0f0f0" : "white",
                  },
                ]}
              >
                <Text>{value || "Seleccionar fecha"}</Text>
              </Pressable>
              {show && (
                <DateTimePicker
                  disabled={isDisabled}
                  testID="dateTimePicker"
                  value={currentDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                  minimumDate={new Date()}
                />
              )}
              {errors[name] && (
                <Text style={{ color: "red" }}>{errors[name].message}</Text>
              )}
            </View>
          );
        }}
      />
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: errors[name] ? "red" : "gray" },
            ]}
            placeholder={label}
            value={field.value}
            onChangeText={field.onChange}
            editable={name === "id" ? !isEditing : true}
          />
          {errors[name] && (
            <Text style={{ color: "red" }}>{errors[name].message}</Text>
          )}
        </View>
      )}
    />
  );
};

const FormFields = ({
  control,
  errors,
  isEditing,
  setValue,
}: FormFieldsProps) => {
  return (
    <>
      <Field
        control={control}
        errors={errors}
        isEditing={isEditing}
        setValue={setValue}
        name="id"
        label="ID"
      />

      <Field
        control={control}
        errors={errors}
        isEditing={isEditing}
        setValue={setValue}
        name="name"
        label="Nombre"
      />

      <Field
        control={control}
        errors={errors}
        isEditing={isEditing}
        setValue={setValue}
        name="description"
        label="Descripción"
      />

      <Field
        control={control}
        errors={errors}
        isEditing={isEditing}
        setValue={setValue}
        name="logo"
        label="Logo"
      />

      <Field
        control={control}
        errors={errors}
        isEditing={isEditing}
        setValue={setValue}
        name="date_release"
        label="Fecha de Liberación"
        isDate
      />

      <Field
        control={control}
        errors={errors}
        isEditing={isEditing}
        setValue={setValue}
        name="date_revision"
        label="Fecha de Revisión"
        isDate
        isDisabled={true}
      />
    </>
  );
};

export default FormFields;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
  },
});
