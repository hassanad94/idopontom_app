import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { SvgUri } from "react-native-svg";

import { SHADOWS } from "../utilities";

const ServiceCard = (...props) => {
  const { id, imgUrl, title, rating, address, shortDescription } = props[0];

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Service", {
          id,
          imgUrl,
          title,
          rating,
          address,
          shortDescription,
        });
      }}
      className="bg-white mr-3 pb-3 mb-4 rounded-lg"
      style={{ ...SHADOWS.dark }}
    >
      <Image
        source={{ uri: imgUrl }}
        className="h-36 w-64 rounded-t-lg drop-shadow"
      />

      <View className="px-3 py-2 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>

        <View className="flex-row justify-center items-center">
          <Text className="text-primary">{rating} </Text>
          <SvgUri
            width={30}
            height={20}
            uri="https://firebasestorage.googleapis.com/v0/b/idopontom-72426.appspot.com/o/ertekeles.svg?alt=media&token=c9eea4bd-3d3b-4463-8465-676a9daa40d1"
          />
        </View>
      </View>

      <View className="px-3 flex-row items-center space-x-1">
        <MapPinIcon color="gray" opacity={0.4} size={22} />
        <Text className="text-xs text-gray-500"> {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
