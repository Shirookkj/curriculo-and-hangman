import { StyleSheet, View } from "react-native";
import HangmanGame from "../../components/hangman/HangmanGame";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <HangmanGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
