import { View, TextInput } from "react-native";
import { useState, useRef } from "react";
import { auth } from "../fireBase";
import { AntDesign } from "@expo/vector-icons";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordField = useRef();
  const emailField = useRef();

  const loginUser = async (email, password) => {
    //console.log(email, password);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View className="justify-center items-center mt-10">
      <View className="flex-row items-center rounded-lg mb-5 bg-white w-full px-3">
        <AntDesign
          onPress={() => {
            emailField.current.focus();
          }}
          name="user"
          color="#808080"
          size={19}
          className="bg-[#000]"
        />
        <TextInput
          className="rounded-lg bg-white flex-1 h-[40px]"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          textContentType="email"
          ref={emailField}
          onChangeText={(inputValue) => setEmail(inputValue)}
        />
      </View>

      <View className="rounded-lg flex-row items-center bg-white w-full px-3">
        <AntDesign
          onPress={() => {
            passwordField.current.focus();
          }}
          name="lock"
          color="#808080"
          size={19}
          className="bg-[#000]"
        />
        <TextInput
          className="rounded-lg bg-white flex-1 h-[40px]"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Jelszó"
          secureTextEntry={true}
          ref={passwordField}
          textContentType="password"
          onChangeText={(inputValue) => setPassword(inputValue)}
        />
      </View>

      <View className="flex-row justify-center mt-12 ">
        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          className="rounded-lg mt-3 mb-3 border w-full py-2 bg-white border-[#1b8ec0]"
        >
          <Text className="text-center text-font text-lg font-bold">
            Bejelentkezés
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailLogin;
