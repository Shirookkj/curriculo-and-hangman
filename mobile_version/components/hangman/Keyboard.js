import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const { width } = Dimensions.get("window");
const KEY_COLUMNS = 8;
const KEY_MARGIN = 4;
const KEY_SIZE = width / KEY_COLUMNS - KEY_MARGIN * 2;

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  onKeyPress,
}) {
  return (
    <View style={styles.keyboard}>
      {ALPHABET.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);

        return (
          <TouchableOpacity
            onPress={() => onKeyPress(letter)}
            style={[
              styles.key,
              isActive && styles.active,
              isInactive && styles.inactive,
            ]}
            disabled={isActive || isInactive}
            key={letter}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  key: {
    width: KEY_SIZE,
    height: KEY_SIZE,
    margin: KEY_MARGIN,
    backgroundColor: "#3498db",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  keyText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "#2ecc71",
  },
  inactive: {
    backgroundColor: "#95a5a6",
    opacity: 0.6,
  },
});
