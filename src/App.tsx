import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Home from "./components/Home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View>
  );
}

Amplify.configure(awsconfig);
registerRootComponent(App);
