import { View, StyleSheet, Text } from "react-native";

function Numbers(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default Numbers;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#472183",
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#C58940",
    fontSize: 36,
  },
});
