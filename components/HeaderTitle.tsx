import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/Colors";

interface HeaderTitleProps {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  color?: string;
}

const HeaderTitle = ({
  iconName,
  title,
  color = Colors.text_blue,
}: HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={30} color={color} />
      <Text style={[styles.text, { color }]}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
