import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

function TabBarIcon({ name, color, library = "Ionicons" }) {
  if (library === "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons
        size={28}
        style={{ marginBottom: -3 }}
        name={name}
        color={color}
      />
    );
  }
  return (
    <Ionicons
      size={28}
      style={{ marginBottom: -3 }}
      name={name}
      color={color}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3498db",
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Meu Portfólio",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiência",
          headerTitle: "Formação e Experiência",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          title: "Projetos",
          headerTitle: "Meus Projetos",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="code-slash" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jogo"
        options={{
          title: "Jogo",
          headerTitle: "Jogo da Forca",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="hangman"
              color={color}
              library="MaterialCommunityIcons"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sobreApp"
        options={{
          title: "Sobre o App",
          headerTitle: "Sobre este App",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="information-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
