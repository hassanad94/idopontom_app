import { View, Text, Pressable } from 'react-native';
import { auth } from "../../fireBase";
import AsyncStorage from '@react-native-async-storage/async-storage';


const signOut = async () => {
    auth.signOut();
    try {
        await AsyncStorage.removeItem('IDOPONTOMUSER');
      } catch(e) {
        // remove error
      }
};

const Logout = () => {
  return (
    <Pressable onPress={signOut}>
        <View className="w-full bg-white rounded-md border py-2">
        <Text className="select-none text-center">Kijelentkezés</Text>
        </View>
    </Pressable>
  )
}

export default Logout