import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProjectCard = ({ title, description, technologies, link }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>

    <View style={styles.techContainer}>
      {technologies.map((tech, index) => (
        <View key={index} style={styles.techBadge}>
          <Text style={styles.techText}>{tech}</Text>
        </View>
      ))}
    </View>

    {link && (
      <TouchableOpacity
        onPress={() => Linking.openURL(link)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ver no GitHub</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default function ProjectsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.headerTitle}>Meus Projetos</Text>

      <ProjectCard
        title="Portfólio Web (Next.js)"
        description="Versão web deste currículo, desenvolvida com React, Next.js e CSS Modules. Inclui uma versão web do Jogo da Forca."
        technologies={["React", "Next.js", "CSS Modules"]}
        link="https://github.com/Shirookkj/curriculo-and-hangman/tree/main/web_version"
      />

      <ProjectCard
        title="Portfólio Mobile (App)"
        description="Aplicativo desenvolvido com React Native e Expo para demonstrar habilidades em desenvolvimento móvel híbrido. Utiliza navegação nativa e animações SVG."
        technologies={["React Native", "Expo", "Expo Router", "SVG"]}
        link="https://github.com/Shirookkj/curriculo-and-hangman/tree/main/mobile_version"
      />

      <ProjectCard
        title="Jogo da Forca (Lógica)"
        description="Implementação da lógica do jogo da forca em JavaScript, reutilizada tanto na versão Web quanto na versão Mobile."
        technologies={["JavaScript", "Algoritmos", "Lógica de Estado"]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f9",
  },
  contentContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 15,
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 15,
  },
  techBadge: {
    backgroundColor: "#ecf0f1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  techText: {
    fontSize: 12,
    color: "#7f8c8d",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
