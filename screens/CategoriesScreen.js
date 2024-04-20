import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";

const renderItem = ({ item }) => {
  return <GridItem title={item.title} mycolor={item.color} />;
};

function CategoriesScreen(title, color) {
  return (
    <View style={styles.outsideContainer}>
      <FlatList
        style={styles.container}
        data={CATEGORIES}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    alignContent:'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
  },
});
