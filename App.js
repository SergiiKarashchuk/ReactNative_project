// import { StatusBar } from 'expo-status-bar';
// import LoginScreen from "./src/screens/authScreen/LoginScreen";
import RegisterScreen from "./src/screens/authScreen/RegisterScreen";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
  console.log("I am in debug");
}

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  //fonts
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Lora-regular": require("./src/assets/fonts/Lora/static/Lora-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // End fonts

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RegisterScreen />
        {/* <LoginScreen /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
