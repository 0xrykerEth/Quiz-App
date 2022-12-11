import { Text, View, StyleSheet, ImageBackground } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameOver({ press }) {
  return (
    <ImageBackground
      source={require("../assets/images/congrats.jpg")}
      style={styles.conatiner}
    >
      <View style={styles.conatiners}>
        <Text style={styles.textMsg}>Congrats {"\n"}The game is over</Text>
        <View style={{ marginTop: 50 }}>
          <PrimaryButton onPress={press}>Restart</PrimaryButton>
        </View>
      </View>
    </ImageBackground>
  );
}
export default GameOver;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  conatiners: {
    justifyContent: "center",
    flex: 0.5,
    alignContent: "center",
    marginTop: 200,
    marginHorizontal: 24,
    backgroundColor: "#00FFD1",
  },
  textMsg: {
    fontSize: 38,
    textAlign: "center",
  },
});
