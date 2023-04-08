// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./src/components/Screens/RegistrationScreen";
// import LoginScreen from "./src/components/Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./src/images/photo-bg.jpg")}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
