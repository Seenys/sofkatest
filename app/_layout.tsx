import { Stack } from "expo-router";
import HeaderTitle from "../components/HeaderTitle";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <HeaderTitle iconName="cash-multiple" title="Banco" />
        ),
        headerTitleAlign: "center",
      }}
    />
  );
};

export default RootLayout;
