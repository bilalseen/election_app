import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Oy Sayım App</Text>
      <StatusBar style="auto" />
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
    fontWeight: "600"
   }
});
