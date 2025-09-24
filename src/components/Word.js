import React from "react";
import styles from "../styles/Hangman.module.css";

export default function Word({ wordToGuess, guessedLetters }) {
  return (
    <div className={styles.wordDisplay}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className={styles.letter}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}
