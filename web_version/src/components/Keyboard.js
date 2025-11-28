import React from "react";
import styles from "../styles/Hangman.module.css";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  onKeyPress,
}) {
  return (
    <div className={styles.keyboard}>
      {ALPHABET.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            onClick={() => onKeyPress(letter)}
            className={`${styles.key} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isActive || isInactive}
            key={letter}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
