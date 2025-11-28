import { useCallback, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import HangmanFigure from "./HangmanFigure";
import Keyboard from "./Keyboard";
import Word from "./Word";

const wordList = [
  "REACT",
  "EXPO",
  "JAVASCRIPT",
  "NATIVO",
  "COMPONENTE",
  "ESTADO",
  "PROPS",
  "INTERFACE",
  "DESENVOLVEDOR",
  "FRAMEWORK",
  "BIBLIOTECA",
  "ALGORITMO",
  "VARIAVEL",
  "FUNCAO",
  "OBJETO",
  "METODO",
  "CLASSE",
  "PROJETO",
  "DEBUGGING",
  "COMPILADOR",
  "BACKEND",
  "FRONTEND",
  "DATABASE",
  "API",
  "RESPONSIVO",
  "ESTILIZACAO",
];
const MAX_MISTAKES = 6;
const getRandomWord = () =>
  wordList[Math.floor(Math.random() * wordList.length)];

export default function HangmanGame() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  const wrongLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );
  const isWinner = wordToGuess
    .split("")
    .every((letter) => correctLetters.includes(letter));
  const isLoser = wrongLetters.length >= MAX_MISTAKES;

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      if (!wordToGuess.includes(letter)) {
        setMistakes((currentMistakes) => currentMistakes + 1);
      }
    },
    [guessedLetters, isWinner, isLoser, wordToGuess]
  );

  const resetGame = () => {
    setGuessedLetters([]);
    setMistakes(0);
    setWordToGuess(getRandomWord());
  };

  return (
    <ScrollView contentContainerStyle={styles.gameContainer}>
      <Text style={styles.title}>Jogo da Forca</Text>

      <View style={styles.figureContainer}>
        <HangmanFigure numberOfMistakes={mistakes} />
      </View>

      <Word wordToGuess={wordToGuess} guessedLetters={correctLetters} />

      <View style={styles.keyboardContainer}>
        {isWinner && (
          <View style={[styles.gameStatusPopup, styles.winPopup]}>
            <Text style={styles.popupText}>Parabéns, você venceu!</Text>
            <Button
              title="Jogar Novamente"
              onPress={resetGame}
              color="#27ae60"
            />
          </View>
        )}
        {isLoser && (
          <View style={[styles.gameStatusPopup, styles.losePopup]}>
            <Text style={styles.popupText}>Que pena, você perdeu!</Text>
            <Text style={styles.popupSubText}>
              A palavra era: {wordToGuess}
            </Text>
            <Button
              title="Tentar Novamente"
              onPress={resetGame}
              color="#c0392b"
            />
          </View>
        )}
        {!isWinner && !isLoser && (
          <Keyboard
            activeLetters={correctLetters}
            inactiveLetters={wrongLetters}
            onKeyPress={addGuessedLetter}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginVertical: 20,
    textTransform: "uppercase",
  },
  figureContainer: {
    height: 250,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  keyboardContainer: {
    width: "100%",
    marginTop: 20,
  },
  gameStatusPopup: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  winPopup: {
    backgroundColor: "rgba(46, 204, 113, 0.1)",
  },
  losePopup: {
    backgroundColor: "rgba(231, 76, 60, 0.1)",
  },
  popupText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  popupSubText: {
    fontSize: 18,
    marginBottom: 15,
    color: "#333",
  },
});
