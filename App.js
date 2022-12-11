import { StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  function RestartGame() {
    setUserNumber(null);
    setGameOver(false);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameOverHandler() {
    setGameOver(true);
  }

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        press={RestartGame}
      />
    );
  }
  if (gameOver && userNumber) {
    screen = <GameOver press={RestartGame} />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["#aa4b6b", "#6b6b83", "#3b8d99"]}
    >
      <SafeAreaView style={styles.containerimg}>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.7,
  },
  containerimg: {
    flex: 1,
  },
});
