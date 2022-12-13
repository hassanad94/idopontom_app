import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { auth, db } from "../fireBase";

const Registration = () => {
  const [profileImage, setProfileImage] = useState("");

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);

  const [name, setName] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      //console.log(result);
      if (result.cancelled) {
        return;
      }
      setProfileImage(result.uri);
    });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };

  const registerUser = async () => {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password, name)
        .then((result) => {
          auth.currentUser
            .sendEmailVerification({
              handleCodeInApp: true,
              url: "htpps://idopontom.firebaseapp.com",
            })
            .then((result) => {
              alert("A megerősítő emailt kiküldtük.");
            })
            .catch(() => {
              alert(error.message);
            })
            .then(() => {
              db.collection("Vendegek").doc(auth.currentUser.uid).set({
                name: name,
                email: email,
                profileImg: profileImage,
              });
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {}
  };

  return (
    <SafeAreaView className="">
      <View className="absolute inset-0 h-[100vh] w-full object-contain bg-primary"></View>

      <View className="screen-content mx-4 mt-[3vh] pb-4 pt-1 h-[100%] justify-between">
        <View className="h-[60vh] p-5 rounded-md justify-between items-center bg-white">
          <View className="image-upload flex-1">
            {profileImage ? (
              <View className="p-2 rounded-full">
                <Image
                  className="h-[100px] w-[100px] rounded-full"
                  source={{
                    uri: profileImage,
                  }}
                />
              </View>
            ) : (
              <Pressable onPress={pickImage}>
                <View className="h-[100px] w-[105px] border-gray-500 p-2 border-4 items-center justify-center rounded-full border-dotted">
                  <Text className="select-none text-center">Add Photo</Text>
                </View>
              </Pressable>
            )}
          </View>

          <TextInput
            className="w-full mb-3 pb-1 pt-[20px] border-[#bcbdc1] border-b"
            onChangeText={(input) => {
              setEmail(input);
            }}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="email"
          />
          <TextInput
            className="w-full mb-3 pb-1 pt-[20px] border-[#bcbdc1] border-b"
            onChangeText={(input) => {
              setPassword(input);
            }}
            value={password}
            placeholder="Jelszó"
            keyboardType="text"
            secureTextEntry={true}
            textContentType="password"
          />

          <TextInput
            className="w-full mb-3 pb-1 pt-[20px] border-[#bcbdc1] border-b"
            onChangeText={(input) => {
              setName(input);
            }}
            value={name}
            placeholder="Név"
            keyboardType="text"
            textContentType="name"
          />
        </View>

        <View className="w-full bg-white rounded-md py-2">
          <Text
            onPress={registerUser}
            className="text-[#000] text-center text-xl font-bold"
          >
            Regisztrálok
          </Text>
        </View>

        <View className="other-method">
          <View className="flex-row justify-center my-2">
            <View className="border z-[-1] absolute top-1/2 h-[1px] border-[#4d666f4a] w-[90%]" />
            <Text className="bg-[#0098da] color-[#c5d3dc] px-2 z-10 ">
              {" "}
              gyors regisztráció
            </Text>
          </View>

          <View className="social-login flex-row items-center gap-3 justify-between">
            <View className="flex-1 bg-[#c94130] flex-row gap-2 items-center pb-1 rounded-sm px-1">
              <AntDesign name="google" size={24} color="white" />
              <Text className="text-white flex-1 text-[12px]">Google</Text>
            </View>
            <View className="flex-1 bg-[#3a63be] flex-row gap-2 items-center pb-1 rounded-sm px-1">
              <AntDesign name="facebook-square" size={24} color="white" />
              <Text className="text-white flex-1 text-[12px]">Facebook</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;
