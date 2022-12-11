import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGame({ onPickNumber }) {
  const [enteredText, setEnteredText] = useState("");

  function enterText(enter) {
    setEnteredText(enter);
  }

  function resetInputHandler() {
    setEnteredText("");
  }

  function confirmHandler() {
    const chosenNumber = parseInt(enteredText);

    if (isNaN(chosenNumber) || chosenNumber < 0) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 0 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <ImageBackground
      source={require("../assets/images/image.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="numeric"
          autoCorrect={false}
          value={enteredText}
          onChangeText={enterText}
        />
        <View style={styles.btnView}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </ImageBackground>
  );
}
export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    padding: 16,
    backgroundColor: "#C539B4",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
  },
  textInput: {
    width: 100,
    textAlign: "center",
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  btnView: {
    flexDirection: "row",
  },
});
