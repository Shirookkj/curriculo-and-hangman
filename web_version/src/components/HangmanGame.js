import React, { useState, useEffect, useCallback } from "react";

import Word from "./Word";
import HangmanFigure from "./HangmanFigure";
import Keyboard from "./Keyboard";
import styles from "../styles/Hangman.module.css";

const wordList = [
  "REACT",
  "NEXTJS",
  "JAVASCRIPT",
  "UNICAP",
  "CIENCIA",
  "UNIVERSIDADE",
  "INTERFACE",
  "DESENVOLVEDOR",
  "FRAMEWORK",
  "DADOS",
  "ALGORITMO",
  "VARIAVEL",
  "FUNCAO",
  "OBJETO",
  "METODO",
  "CLASSE",
  "HERANCA",
  "PROJETO",
  "ENCAPSULAMENTO",
  "ROBOTICA",
  "COMPILADOR",
  "INTERPRETADOR",
  "BACKEND",
  "FRONTEND",
  "DATABASE",
  "API",
  "RESPONSIVO",
  "ESTILIZACAO",
  "MARKUP",
  "FORCA",
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
    <div className={styles.gameContainer}>
      <h1 className={styles.title}>Jogo da Forca</h1>
      <div className={styles.gameArea}>
        <div className={styles.figureContainer}>
          <HangmanFigure numberOfMistakes={mistakes} />
        </div>
        <div className={styles.wordContainer}>
          <Word wordToGuess={wordToGuess} guessedLetters={correctLetters} />
        </div>
      </div>

      <div className={styles.keyboardContainer}>
        {isWinner && (
          <div className={`${styles.gameStatusPopup} ${styles.winPopup}`}>
            <p>Parabéns, você venceu!</p>
            <button onClick={resetGame}>Jogar Novamente</button>
          </div>
        )}
        {isLoser && (
          <div className={`${styles.gameStatusPopup} ${styles.losePopup}`}>
            <p>Que pena, você perdeu!</p>
            <p>
              A palavra era: <strong>{wordToGuess}</strong>
            </p>
            <button onClick={resetGame}>Tentar Novamente</button>
          </div>
        )}
        {!isWinner && !isLoser && (
          <Keyboard
            activeLetters={correctLetters}
            inactiveLetters={wrongLetters}
            onKeyPress={addGuessedLetter}
          />
        )}
      </div>
    </div>
  );
}
