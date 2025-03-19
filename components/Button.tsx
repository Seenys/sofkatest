import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

interface ButtonProps {
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: {
    backgroundColor: Colors.primary_yellow,
  },
  secondary: {
    backgroundColor: Colors.secondary_gray,
  },
  danger: {
    backgroundColor: Colors.tertiary_red,
  },
  success: {
    backgroundColor: Colors.quaternary_green,
  },
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  disabled,
  loading,
  children,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonVariants[variant]]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
