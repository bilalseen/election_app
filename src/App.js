import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import UserCard from "./components/UserCard";
import kilicdaroglu_image from "./assets/photos/Kemal_Kılıcdaroglu.jpg";
import erdogan_image from "./assets/photos/Recep_Tayyip_Erdogan_in_Ukraine.jpg";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Oy Sayım App</Text>
      <View style={styles.inner_container}>
        <UserCard image={erdogan_image} number={50} />
        <UserCard image={kilicdaroglu_image} number={50} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  header: {
    textAlign: "center",
    backgroundColor: "red",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "600",
  },
  inner_container: {
    flexDirection: "row",
  },
});
