import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { COLORS } from "../utilities";
import { SvgUri } from "react-native-svg";
import OpenHours from "../components/OpenHours";
import { openHourTestData, serviceTD } from "../testData";
import { serviceTestData } from "../testData";
import ServicesList from "../components/ServicesList";
import ServiceRow from "../components/ServiceRow";
const ServiceScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: { id, imgUrl, title, rating, address, shortDescription },
  } = useRoute();

  return (
    <>
      <View className="absolute z-50 top-9 left-3">
        <TouchableOpacity
          onPress={navigation.goBack}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          className="p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-56 bg-gray-300 p-4"
          />
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <SvgUri
                  width={25}
                  height={20}
                  opacity={0.5}
                  uri="https://firebasestorage.googleapis.com/v0/b/idopontom-72426.appspot.com/o/ertekeles.svg?alt=media&token=c9eea4bd-3d3b-4463-8465-676a9daa40d1"
                />
                <Text className="text-primary">{rating} </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500"> {address}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>

            <View>
              <OpenHours openHours={openHourTestData} />
            </View>
          </View>
        </View>
        <View>
          <Text className="text-center py-6 font-bold text-xl">
            {" "}
            Válassz Szolgáltatást
          </Text>
          {serviceTD?.map((service) => {
            return <ServiceRow key={service.id} service={service} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default ServiceScreen;
