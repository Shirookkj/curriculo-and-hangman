import {
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.h2}>{title}</Text>
    {children}
  </View>
);

const Skill = ({ name }) => (
  <View style={styles.skill}>
    <Text style={styles.skillText}>{name}</Text>
  </View>
);

export default function HomeScreen() {
  const openGithub = () => {
    Linking.openURL("https://github.com/Shirookkj");
  };

  return (
    <ScrollView
      style={styles.pageContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={styles.h1}>Artur Uchôa S. Barbosa</Text>
        <Text style={styles.p}>
          Desenvolvedor de Software | Estudante de Ciência da Computação
        </Text>
        <Text style={styles.p}>Estagiário em Teste de Software</Text>
        <Text style={styles.p}>Email: artur02usb@gmail.com</Text>
        <Text style={styles.p}>+55 (81) 99922-8064</Text>
        {/* Links externos são feitos com Linking */}
        <Text style={styles.link} onPress={openGithub}>
          github.com/Shirookkj
        </Text>
      </View>

      <Section title="Sobre Mim">
        <Text style={styles.p}>
          Olá! Sou um estudante de Ciência da Computação, atualmente estagiando
          na FADE-UFPE, no projeto da Motorola. Estou buscando oportunidades
          onde possa focar em testes de software para aplicar e expandir meus
          conhecimentos em desenvolvimento de software.
        </Text>
      </Section>

      <Section title="Formação Acadêmica">
        <Text style={styles.h3}>Bacharelado em Ciência da Computação</Text>
        <Text style={styles.institution}>
          Universidade Católica de Pernambuco (UNICAP)
        </Text>
        <Text style={styles.dates}>
          Agosto de 2023 – Junho de 2027 (Previsto)
        </Text>
      </Section>

      <Section title="Habilidades">
        <View style={styles.skillsContainer}>
          <Skill name="Python" />
          <Skill name="C" />
          <Skill name="QA e Testes" />
          <Skill name="Automação de Testes" />
          <Skill name="Desenvolvimento Ágil" />
          <Skill name="React Native" />
          <Skill name="Expo" />
        </View>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#f4f7f9",
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 20,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
  },
  h2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#34495e",
    borderBottomWidth: 2,
    borderBottomColor: "#3498db",
    paddingBottom: 5,
    marginBottom: 15,
  },
  h3: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 4,
  },
  institution: {
    fontWeight: "500",
    color: "#555",
    fontSize: 16,
  },
  dates: {
    fontStyle: "italic",
    color: "#7f8c8d",
    fontSize: 14,
    marginTop: 4,
  },
  p: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: "#3498db",
    fontWeight: "bold",
    marginTop: 5,
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
    marginBottom: 25,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0,0,0, 0.05)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 15,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skill: {
    backgroundColor: "#3498db",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  skillText: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },
});
