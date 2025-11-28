"use client";

import HangmanGame from "../../components/HangmanGame";
import Link from "next/link";
import styles from "../../styles/Hangman.module.css";

export default function GamePage() {
  return (
    <div className={styles.pageContainer}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.backLink}>
          ← Voltar ao Portfólio
        </Link>
      </nav>
      <HangmanGame />
    </div>
  );
}
