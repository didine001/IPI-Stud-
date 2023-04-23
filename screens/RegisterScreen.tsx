import { Linking } from "react-native";
import * as AuthSession from "expo-auth-session";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogin = async () => {
    // Effectuer l'authentification avec Microsoft
    const redirectUri = "https://localhost:19000/auth-callback";
    const authUrl = `https://login.microsoftonline.com/a228cb18-7e00-4474-800a-889a457be26d/oauth2/v2.0/authorize?client_id=3790a2ff-ec5f-4b72-98ec-8759939eb9b2&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=Calendars.Read`;

    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    });

    if (result.type === "success") {
      setUserLoggedIn(true);

      // Rediriger l'utilisateur vers la page de connexion
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Se connecter avec Microsoft</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;
