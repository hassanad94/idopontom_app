import { View, Text } from "react-native";

const OpenHours = ({ openHours }) => {
  return (
    <View>
      <Text className="text-2xl font-bold mb-2">NyitvaTartás</Text>

      {openHours?.map((date) => {
        const { day, from, to } = date;

        return (
          <View key={day} className="justify-between flex-row mb-2">
            <View>
              <Text>{day}</Text>
            </View>

            <View>
              <Text>
                {from} - {to}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default OpenHours;
