import { View, Text, Linking } from "react-native";

const ContactInfo = ({ contacts }) => {
  const { phone, email } = contacts || {};

  return (
    <View>
      <Text className="text-2xl font-bold mb-2">Kapcsolat</Text>
      <View className="justify-evenly flex-row">
        <View>
          <View>
            <Text>Telefonszám:</Text>
          </View>

          <View className="w-[50px]">
            <Text
              onPress={() => {
                Linking.openURL(`tel:${phone}`);
              }}
            >
              {phone} 📞
            </Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Email:</Text>
          </View>

          <View className="w-[50px]">
            <Text onPress={() => Linking.openURL(`mailto:${email}`)}>
              {email} ✉
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactInfo;
