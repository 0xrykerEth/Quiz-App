import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        onPress={props.onPress}
        android_ripple={{ color: "#810CA8" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#4e0329",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
