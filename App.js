import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.outsideContainer}>
          <CategoriesScreen style={styles.container} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
  },
});
