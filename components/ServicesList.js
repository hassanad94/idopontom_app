import { View, Text } from "react-native";

const ServicesList = ({ services }) => {
  return (
    <View>
      <Text className="text-2xl font-bold mb-2">Szolgáltatások</Text>

      {services?.map((service) => {
        const { name, duration } = service;

        return (
          <View key={name} className="justify-between flex-row mb-2">
            <View>
              <Text>{name}</Text>
            </View>

            <View className="w-[50px]">
              <Text>⌛ {duration}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ServicesList;
