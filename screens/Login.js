import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FacebookSignIn from "../components/Buttons/FacebookSignIn";
import GoogleSignIn from "../components/Buttons/GoogleSignIn";
import AppleSignIn from "../components/Buttons/AppleSignIn";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="absolute inset-0 h-[100vh] w-full object-contain bg-primary"></View>
      <View className="screen-content mx-4 pb-4 h-[100%] justify-center">
        <View className="login-section">
          <View className="mt-[3vh] bg-white justify-between rounded-xl p-4 h-[78vh]">
            <View className="w-full">
              <Text className="text-font text-center text-xl font-bold">
                Ide kell tenni még a Logót! Jelentkezz be vagy regisztrálj 👇🏽
              </Text>
            </View>

            <View className="logins-container h-[75%] justify-between items-center">
              <GoogleSignIn />

              <FacebookSignIn />

              <View className="email-login flex-row justify-center">
                <TouchableOpacity
                  onPress={() => navigation.navigate("EmailLogin")}
                  className="rounded-lg py-2 bg-[#128ec3] w-full"
                >
                  <Text className="text-center text-white text-lg font-bold">
                    Bejelentkezés
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="regist flex-row justify-center">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                  className="rounded-lg border w-full py-2 bg-white border-[#1b8ec0]"
                >
                  <Text className="text-font text-center text-lg font-bold">
                    Regisztráció
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
