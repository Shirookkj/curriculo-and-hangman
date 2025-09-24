import React from "react";
import styles from "../styles/Hangman.module.css";

const BODY_PARTS = [
  <circle key="head" cx="210" cy="90" r="20" />,
  <line key="body" x1="210" y1="110" x2="210" y2="170" />,
  <line key="arm1" x1="210" y1="130" x2="180" y2="160" />,
  <line key="arm2" x1="210" y1="130" x2="240" y2="160" />,
  <line key="leg1" x1="210" y1="170" x2="180" y2="200" />,
  <line key="leg2" x1="210" y1="170" x2="240" y2="200" />,
];

export default function HangmanFigure({ numberOfMistakes }) {
  return (
    <svg height="250" width="250" className={styles.hangmanSVG}>
      <line x1="60" y1="230" x2="140" y2="230" />
      <line x1="100" y1="230" x2="100" y2="50" />
      <line x1="100" y1="50" x2="210" y2="50" />
      <line x1="210" y1="50" x2="210" y2="70" />
      {BODY_PARTS.slice(0, numberOfMistakes)}
    </svg>
  );
}
