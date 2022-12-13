import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { auth } from "../../fireBase";
import { AntDesign } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider } from "firebase/auth";

export default function GoogleSignIn() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "402961395983-tfllrsh7pb5oalneu4j48eebm6ufih06.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      auth.signInWithCredential(credential);
    }
  }, [response]);

  return (
    <Pressable
      onPress={() => {
        promptAsync();
      }}
      className="bg-[#c94130] flex-row items-center rounded-lg py-2 w-full"
    >
      <AntDesign
        name="google"
        size={30}
        style={{ marginLeft: "5%" }}
        color="white"
      />
      <View className="w-full absolute">
        <Text className="text-white text-center text-lg font-bold">Google</Text>
      </View>
    </Pressable>
  );
}
