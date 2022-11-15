import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";

const ServiceRow = ({ service }) => {
  const { id, name, description, price, image } = service || {};

  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({ amount: price, code: "HUF" });

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Reservation", {
          id,
        });
      }}
      className="bg-white border mb-3 p-4 border-gray-200"
    >
      <View className="flex-row items-center">
        <View className="flex-1 pr-2 text-left">
          <Text className="text-lg mb-1">{name} </Text>
          <Text className="text-gray-400"> {description}</Text>
          <Text className="text-gray-400 mt-2">{valueFormattedWithSymbol}</Text>
        </View>
        <View>
          <Image
            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            source={{ uri: image }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceRow;
