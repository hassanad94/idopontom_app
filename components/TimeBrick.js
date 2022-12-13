import { View, Text } from "react-native";

const TimeBrick = ({ value }) => {
  return (
    <View className="border border-primary basis-[90px] py-3 mx-[5px] items-center justify-center mb-2">
      <Text className="text-primary">{value}</Text>
    </View>
  );
};

export default TimeBrick;
