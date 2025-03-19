import React from "react";
import {
  Modal as RNModal,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Button from "./Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../utils/Colors";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  onConfirm,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Pressable onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </View>
          <ScrollView>
            <Text style={styles.message}>{message}</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button onPress={onConfirm} variant="primary">
              <Text
                style={{
                  color: Colors.text_blue,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {confirmText}
              </Text>
            </Button>
            <Button onPress={onClose} variant="secondary">
              <Text
                style={{
                  color: Colors.text_blue,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {cancelText}
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    maxWidth: 400,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  message: {
    fontSize: 16,
    marginVertical: 20,
    paddingBottom: 20,
    textAlign: "center",
    color: "#666",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    gap: 10,
  },
});

export default Modal;
