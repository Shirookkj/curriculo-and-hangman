// app/(tabs)/experiencia.js
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

// Componente para reutilizar o estilo de seção
const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

// Componente para itens de experiência/educação
const ExperienceItem = ({ role, institution, date, details }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.role}>{role}</Text>
    <Text style={styles.institution}>{institution}</Text>
    <Text style={styles.date}>{date}</Text>
    {details && (
      <View style={styles.detailsContainer}>
        {details.map((detail, index) => (
          <Text key={index} style={styles.detailPoint}>
            • {detail}
          </Text>
        ))}
      </View>
    )}
  </View>
);

export default function ExperienceScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Section title="Formação Acadêmica">
        <ExperienceItem
          role="Bacharelado em Ciência da Computação"
          institution="Universidade Católica de Pernambuco (UNICAP)"
          date="Agosto de 2023 – Junho de 2027 (Previsto)"
        />
      </Section>

      <Section title="Experiência Profissional">
        <ExperienceItem
          role="Estagiário em Teste de Software"
          institution="Projeto CIn/Motorola"
          date="Dezembro de 2024 – Atualmente"
          details={[
            "Automação, análise e execução de testes em sistemas Android da Motorola.",
            "Vivência em metodologias de desenvolvimento ágil (Sprints, Dailies, Plannings).",
          ]}
        />
      </Section>
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
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    // Sombra para iOS e Android
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#3498db",
    paddingBottom: 5,
  },
  itemContainer: {
    marginBottom: 10,
  },
  role: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
  },
  institution: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7f8c8d",
    marginTop: 2,
  },
  date: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#95a5a6",
    marginTop: 2,
    marginBottom: 8,
  },
  detailsContainer: {
    marginTop: 5,
    paddingLeft: 5,
  },
  detailPoint: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 4,
  },
});
