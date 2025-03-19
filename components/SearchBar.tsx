import React from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../utils/Colors";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Buscar...",
}) => {
  const handleClear = () => {
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={20}
          color={Colors.text_blue}
          testID="search-icon"
        />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
        />
        {value.length > 0 && (
          <Pressable onPress={handleClear}>
            <AntDesign
              name="close"
              size={20}
              color={Colors.text_blue}
              testID="clear-icon"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
    borderColor: "gray",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.text_blue,
    fontWeight: "bold",
  },
});

export default SearchBar;
