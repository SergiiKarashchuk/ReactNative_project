import { useState } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";

const addBtn = require("../../images/addBtn.png");
const removeBtn = require("../../images/removeBtn.png");

//fonts
import { useCallback } from "react";
import { useFonts } from "expo-font";

const RegistrationScreen = () => {
  const focusInputStyle = (focus) => {
    return focus ? { ...styles.input, ...styles.inputFocus } : styles.input;
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [login, setLogin] = useState("");
  const [loginFocus, setLoginFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const onChangeLogin = (text) => setLogin(text);
  const onChangeEmail = (text) => setEmail(text);
  const onChangePassword = (text) => setPassword(text);

  const toggleIsShowKeyboard = () => {
    setIsShowKeyboard((prevState) => !prevState);
  };

  const onRegistration = () => {
    Keyboard.dismiss();
    setIsSecurePassword(true);
    console.log({ login, email, password });
    resetForm();
  };

  const passwordShown = () => {
    isSecurePassword === true
      ? setIsSecurePassword(false)
      : setIsSecurePassword(true);
  };

  const showPasswordBtn = isSecurePassword ? "Show" : "Hide";

  const resetForm = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  // fonts
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View>
        <View style={styles.photo}></View>
        <TouchableOpacity style={styles.addAvatarBtn}>
          <Image source={addBtn} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Registration</Text>

      <View
        style={{ ...styles.form, marginBottom: isShowKeyboard ? -130 : 50 }}
      >
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
          <View>
            <TextInput
              style={focusInputStyle(loginFocus)}
              value={login}
              onChangeText={onChangeLogin}
              placeholder="Login"
              onFocus={() => {
                toggleIsShowKeyboard(), setLoginFocus(true);
              }}
              onBlur={() => {
                toggleIsShowKeyboard(), setLoginFocus(false);
              }}
            />
          </View>

          <View
            style={{
              marginTop: 16,
            }}
          >
            <TextInput
              style={focusInputStyle(emailFocus)}
              value={email}
              onChangeText={onChangeEmail}
              placeholder="Email"
              onFocus={() => {
                toggleIsShowKeyboard(), setEmailFocus(true);
              }}
              onBlur={() => {
                toggleIsShowKeyboard(), setEmailFocus(false);
              }}
            />
          </View>

          <View style={{ marginTop: 16 }}>
            <TextInput
              style={focusInputStyle(passwordFocus)}
              value={password}
              onChangeText={onChangePassword}
              onFocus={() => {
                setPasswordFocus(true);
              }}
              onBlur={() => {
                setPasswordFocus(false);
              }}
              secureTextEntry={isSecurePassword}
              placeholder="Password"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.passwordShowBtn}
              onPress={passwordShown}
            >
              <Text style={styles.loginTitleBtn}>{showPasswordBtn}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <View
          style={{
            marginTop: 44,
            // display: isShowKeyboard ? 'none' : 'flex'
          }}
        >
          <TouchableOpacity
            style={styles.registrationBtn}
            activeOpacity={0.8}
            onPress={onRegistration}
          >
            <Text style={styles.registrationTitleBtn}>Registration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8}>
            <Text style={styles.loginTitleBtn}>
              Already have an account? Sign in...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  photo: {
    position: "absolute",
    top: -60,
    left: 138,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    flex: 1,
    width: 25,
    height: 25,
    color: "#000",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    fontFamily: "Lora-regular",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19,
    fontSize: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontFamily: "Lora-regular",
  },
  inputFocus: { backgroundColor: "#fff", borderColor: "#FF6C00" },
  registrationBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  registrationTitleBtn: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
    fontFamily: "Lora-regular",
  },

  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    color: "#000",
  },
  loginTitleBtn: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    fontFamily: "Lora-regular",
  },
  passwordShowBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  addAvatarBtn: {
    position: "absolute",
    top: 20,
    left: 245,
  },
});

export default RegistrationScreen;
