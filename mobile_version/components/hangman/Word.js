import { Platform, StyleSheet, Text, View } from "react-native";

export default function Word({ wordToGuess, guessedLetters }) {
  return (
    <View style={styles.wordDisplay}>
      {wordToGuess.split("").map((letter, index) => (
        <View key={index} style={styles.letterContainer}>
          <Text style={styles.letter}>
            {guessedLetters.includes(letter) ? letter : "_"}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wordDisplay: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  letterContainer: {
    borderBottomWidth: 5,
    borderBottomColor: "#34495e",
    width: 35,
    alignItems: "center",
    paddingBottom: 5,
  },
  letter: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
    color: "#2c3e50",
  },
});
