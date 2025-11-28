import Link from "next/link";
import styles from "../styles/Portfolio.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Artur Uchôa S. Barbosa</h1>
        <p>Desenvolvedor de Software | Estudante de Ciência da Computação</p>
        <p>Estagiário em Teste de Software</p>
        <p>Email: artur02usb@gmail.com</p>
        <p>
          +55 (81) 99922-8064 |{" "}
          <a
            href="https://github.com/Shirookkj"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            github.com/Shirookkj
          </a>
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou um estudante de Ciência da Computação, atualmente
            estagiando na FADE-UFPE, no projeto da Motorola. Estou buscando
            oportunidades onde possa focar em testes de software para aplicar e
            expandir meus conhecimentos em desenvolvimento de software.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Formação Acadêmica</h2>
          <div className={styles.item}>
            <h3>Bacharelado em Ciência da Computação</h3>
            <p className={styles.institution}>
              Universidade Católica de Pernambuco (UNICAP)
            </p>
            <p className={styles.dates}>
              Agosto de 2023 – Junho de 2027 (Previsto)
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Experiência Profissional</h2>
          <div className={styles.item}>
            <h3>Estagiário em Teste de Software</h3>
            <p className={styles.institution}>Projeto CIn/Motorola</p>
            <p className={styles.dates}>Dezembro de 2024 – Atualmente</p>
            <ul className={styles.details}>
              <li>
                Automação, análise e execução de testes em sistemas android da
                Motorola para garantir a qualidade do software.
              </li>
              <li>
                Vivência em metodologias de desenvolvimento ágil, participando
                de Sprints, Dailies e Plannings.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Habilidades</h2>
          <ul className={styles.skills}>
            <li>Python</li>
            <li>C</li>
            <li>QA e Testes</li>
            <li>Automação de Testes</li>
            <li>Desenvolvimento Ágil</li>
          </ul>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <h2>Teste minhas habilidades!</h2>
          <p>
            Para demonstrar um pouco do meu conhecimento em lógica de
            programação com JavaScript, criei uma página com o clássico Jogo da
            Forca.
          </p>
          <Link href="/jogo-da-forca" className={styles.ctaButton}>
            Jogar Jogo da Forca
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Artur Uchôa Simões Barbosa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
