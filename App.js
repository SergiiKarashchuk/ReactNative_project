// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./src/components/Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/bg.jpg")}
      >
        <RegistrationScreen />
        <Text>Open up App.js to start working on your app!</Text>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
