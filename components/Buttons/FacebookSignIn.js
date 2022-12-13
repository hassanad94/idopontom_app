import { useEffect } from "react";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { FacebookAuthProvider } from "firebase/auth";
import { Pressable, Text, View } from "react-native";
import { auth } from "../../fireBase";
import { AntDesign } from "@expo/vector-icons";

export default function FacebookSignIn() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: "510968860984074",
    redirectUri: "https://auth.expo.io/@hassanad/idopontom_app",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      const credential = FacebookAuthProvider.credential(access_token);
      // Sign in with the credential from the Facebook user.
      auth.signInWithCredential(credential);
    }
  }, [response]);

  return (
    <Pressable
      onPress={() => {
        promptAsync();
      }}
      className="bg-[#3a63be] flex-row items-center rounded-lg py-2 w-full"
    >
      <AntDesign
        name="facebook-square"
        size={30}
        style={{ marginLeft: "5%" }}
        color="white"
      />
      <View className="w-full absolute">
        <Text className="text-white text-center text-lg font-bold">
          Facebook
        </Text>
      </View>
    </Pressable>
  );
}
