import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Numbers from "../components/Numbers";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initalGuess = generateRandomBetween(1, 100, userNumber);
  const [guess, setGuess] = useState(initalGuess);

  function GuessHandler(direction) {
    if (
      (direction === " lower" && guess < userNumber) ||
      (direction === "greater" && guess > userNumber)
    ) {
      Alert.alert("Don't lie", " You know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const newRandom = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(newRandom);
  }

  useEffect(() => {
    if (userNumber === guess) {
      onGameOver(true);
    }
  }, [guess, userNumber, onGameOver]);

  return (
    <ImageBackground
      source={require("../assets/images/newimg.jpg")}
      style={styles.page}
    >
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <Numbers>{guess}</Numbers>
        <View>
          <Text style={styles.txt}>Higher or Lower?</Text>
          <View>
            <PrimaryButton onPress={GuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
            <PrimaryButton onPress={GuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  txt: {
    textAlign: "center",
  },
  page: {
    flex: 1,
    opacity: 1,
  },
});
