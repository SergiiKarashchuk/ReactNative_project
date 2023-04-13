import { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
} from "react-native";

import AddPhotoImage from "../../assets/images/add-photo.svg";

const backgroundImage = require("../../assets/images/background-image.jpg");

const RegisterScreen = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const [login, setLogin] = useState("");
  const [loginFocus, setLoginFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const focusInputStyle = (focus) => {
    return focus ? { ...styles.input, ...styles.inputFocus } : styles.input;
  };

  const onChangeLogin = (text) => setLogin(text);
  const onChangeEmail = (text) => setEmail(text);
  const onChangePassword = (text) => setPassword(text);

  const toggleIsKeyboardVisible = () => {
    setIsKeyboardVisible((prevState) => !prevState);
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        >
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                width: Dimensions.get("window").width,
                paddingBottom: isKeyboardVisible ? 20 : 32,
              }}
            >
              <View style={styles.photoContainer}>
                <View style={styles.imagePhotoContainer}>
                  <Image style={styles.userPhoto} />
                </View>
                <View style={styles.photoButtonContainer}>
                  <AddPhotoImage width={25} height={25} />
                </View>
              </View>

              <View style={styles.header}>
                <Text style={styles.headerTitle}>Registration</Text>
              </View>

              <View>
                <TextInput
                  style={focusInputStyle(loginFocus)}
                  value={login}
                  onChangeText={onChangeLogin}
                  placeholder="Login"
                  onFocus={() => {
                    toggleIsKeyboardVisible(), setLoginFocus(true);
                  }}
                  onBlur={() => {
                    toggleIsKeyboardVisible(), setLoginFocus(false);
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
                    toggleIsKeyboardVisible(), setEmailFocus(true);
                  }}
                  onBlur={() => {
                    toggleIsKeyboardVisible(), setEmailFocus(false);
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

              <View
                style={{
                  marginTop: 44,
                  display: isKeyboardVisible ? "none" : "flex",
                }}
              >
                <TouchableOpacity
                  style={{ ...styles.registrationBtn }}
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
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "stretch",
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    paddingTop: 92,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  photoContainer: {
    position: "absolute",
    top: -60,
    left: Dimensions.get("window").width * 0.5 - 60,
    flex: 1,
  },
  imagePhotoContainer: {
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    overflow: "hidden",
  },

  userPhoto: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  photoButtonContainer: {
    position: "absolute",
    top: 81,
    left: 107,
  },
  addBtn: {
    flex: 1,
    width: 25,
    height: 25,
    color: "#000",
  },

  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },

  input: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
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
    marginHorizontal: 16,
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
    top: 14,
    right: 30,
    fontSize: 16,
    fontWeight: "400",
    color: "#1B4371",
  },
  addAvatarBtn: {
    position: "absolute",
    top: 20,
    left: 245,
  },
});

export default RegisterScreen;
