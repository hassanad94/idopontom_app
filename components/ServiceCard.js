import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { SvgUri } from "react-native-svg";
import { db, docID } from "../fireBase";

import { SHADOWS } from "../utilities";
import { useEffect, useState } from "react";

const ServiceCard = ({provider}) => {

  const navigation = useNavigation();

  const [providerData, setProviderData] = useState({});



  // let providerData = {};

  useEffect(() => {
    
    let unsub = db.collection( "Providers" ).where( docID , "==",  provider )
    .onSnapshot((snapshot) => {

      snapshot.docs.forEach((doc) => {
        let fbdata;
        
        fbdata = {
          id: doc.id,
          data: doc.data(),
        };
        
        setProviderData( fbdata );
      });
    });

    return unsub;

  }, []);

  console.log( providerData );



  const { imageUrl, name, rating, address, shortDescription } = providerData.data || {};

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Service", {
          id,
          imageUrl,
          name,
          rating,
          address,
          shortDescription,
        });
      }}
      className="bg-white mr-3 pb-3 mb-4 rounded-lg"
      style={{ ...SHADOWS.dark }}
    >
      <Image
        source={{ uri: imageUrl }}
        className="h-36 w-64 rounded-t-lg drop-shadow"
      />

      <View className="px-3 py-2 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{name}</Text>

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
