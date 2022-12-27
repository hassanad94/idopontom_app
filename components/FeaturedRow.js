import { View, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import ServiceCard from "./ProviderCard";
import { useState, useEffect } from "react";
import { db } from "../fireBase";

const FeaturedRow = ({ id, description, type }) => {
  let unsub;

  const [services, setServices] = useState([]);

  useEffect(() => {
    const serviceDocRef = db.collection("serviceTypes").doc(id);
    db.collection("categories")
      .where("type", "==", serviceDocRef)
      .onSnapshot((snapshot) => {
        setServices([]);

        snapshot.docs.forEach((doc) => {
          let fbdata;

          fbdata = {
            id: doc.id,
            data: doc.data(),
          };

          setServices((prev) => [...prev, fbdata]);
        });
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{type}</Text>
        <ArrowRightIcon />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {services?.map((service) => {
          const { address, description, imgUrl, lat, long, rating, title } =
            service.data;

          return (
            <ServiceCard
              key={service.id}
              id={id}
              imgUrl={imgUrl}
              title={title}
              rating={rating}
              address={address}
              shortDescription={description}
              lat={lat}
              long={long}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
