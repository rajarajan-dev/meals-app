import { View, Text, StyleSheet, Pressable } from "react-native";

function GridItem({ title, mycolor }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : [styles.button]
        }
      >
        <View style={[styles.containerStyle, { backgroundColor: mycolor }]}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GridItem;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  containerStyle: {
    backgroundColor: "#cca",
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    shadowColor: "black",
    shadowOffset: "0.25",
    shadowOpacity: "0.5",
    shadowRadius: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
