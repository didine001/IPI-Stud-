import { Linking } from "react-native"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDnJvP78HscJflpKZasgY05q15biHxoWQ",
  authDomain: "ipi-s-398f6.firebaseapp.com",
  projectId: "ipi-s-398f6",
  storageBucket: "ipi-s-398f6.appspot.com",
  messagingSenderId: "566529458731",
  appId: "1:566529458731:web:aed9d3479e9b620ec2206e",
  measurementId: "G-PVCHKWRZYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import * as AuthSession from "expo-auth-session";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Créer un compte
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Créer un compte pour accéder à votre emploi du temps
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Mot de passe" />
          <AppTextInput placeholder="Confirmer mot de passe " />
        </View>
        

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            J'ai déjà un compte 
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Ou continuer avec 
          </Text>
              
<View
  style={{
    marginTop: Spacing,
    flexDirection: "row",
    justifyContent: "center",
  }}
>
<TouchableOpacity
  style={{
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  }}
  onPress={async () => {
    const redirectUri = "https://ipi-s-398f6.firebaseapp.com/__/auth/handler";
    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id={3790a2ff-ec5f-4b72-98ec-8759939eb9b2}&response_type=code&redirect_uri=${redirectUri}&scope=openid`;
    
    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    });

    if (result.type === "success") {
      // Handle successful authentication here
    }
  }}
>
  <Ionicons name="logo-google" color={Colors.text} size={Spacing * 2} />
</TouchableOpacity>
</View>
          </View>
        </View>
    </SafeAreaView>);
};

export default RegisterScreen;
