import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Reutilizando os estilos da tela Home (ou criando um arquivo de estilos global)
const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.h2}>{title}</Text>
    {children}
  </View>
);

const TechItem = ({ name, description }) => (
  <View style={styles.item}>
    <Text style={styles.h3}>{name}</Text>
    <Text style={styles.p}>{description}</Text>
  </View>
);

export default function AboutAppScreen() {
  return (
    <ScrollView
      style={styles.pageContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <Section title="Sobre este Aplicativo">
        <Text style={styles.p}>
          Este aplicativo é o meu portfólio profissional, desenvolvido
          inteiramente em React Native para demonstrar minhas habilidades em
          desenvolvimento mobile multiplataforma.
        </Text>
      </Section>
      <Section title="Tecnologias Utilizadas">
        <TechItem
          name="React Native"
          description="Framework principal para construção da interface nativa para iOS e Android."
        />
        <TechItem
          name="Expo"
          description="Plataforma e conjunto de ferramentas (como o Expo Go) que facilitam o desenvolvimento, build e deploy de apps React Native."
        />
        <TechItem
          name="Expo Router"
          description="Usado para toda a navegação do app, permitindo uma navegação nativa baseada em abas e telas (stacks)."
        />
        <TechItem
          name="react-native-svg"
          description="Biblioteca utilizada para renderizar o desenho vetorial (SVG) do boneco no Jogo da Forca."
        />
        <TechItem
          name="@expo/vector-icons"
          description="Pacote que fornece as famílias de ícones (como Ionicons e MaterialCommunityIcons) usadas na Tab Bar."
        />
        <TechItem
          name="JavaScript (ES6+)"
          description="Toda a lógica do aplicativo, incluindo o estado do jogo, foi escrita em JavaScript moderno."
        />
        <TechItem
          name="StyleSheet (React Native)"
          description="Utilizado para toda a estilização do app, criando uma aparência nativa e responsiva."
        />
      </Section>
    </ScrollView>
  );
}

// Estilos (podem ser importados de um arquivo global)
const styles = StyleSheet.create({
  pageContainer: { flex: 1, backgroundColor: "#f4f7f9" },
  contentContainer: { padding: 20 },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
    marginBottom: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  h2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 15,
  },
  h3: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 4,
  },
  p: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  item: {
    marginBottom: 15,
  },
});
