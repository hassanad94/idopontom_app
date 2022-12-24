import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useState, useEffect } from "react";
import { db } from "../fireBase";
import Logout from "../components/Buttons/Logout";
import ServiceCard from "../components/ServiceCard";

export default Home = () => {
  const navigation = useNavigation();
  let unsub;

  const [providers, setProviders] = useState([]);

  const [categories, setCategories] = useState(null)

  //screenMount
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  //Providers
  // useEffect(() => {
  //   unsub = db.collection("Providers").onSnapshot((snapshot) => {
  //     setProviders([]);

  //     snapshot.docs.forEach((doc) => {
  //       let fbdata;

  //       fbdata = {
  //         id: doc.id,
  //         data: doc.data(),
  //       };

  //       setProviders((prev) => [...prev, fbdata]);
  //     });

  //   });

  //   return unsub;

  // }, []);

  //Categories
  useEffect(() => {

    unsub = db.collection("categories").onSnapshot((snapshot) => {
      setCategories([]);

      snapshot.docs.forEach((doc) => {
        let fbdata;

        fbdata = {
          id: doc.id,
          data: doc.data(),
        };

        setCategories((prev) => [...prev, fbdata]);
      });

    });

    return unsub;

  }, []);


  return (
    <SafeAreaView className="bg-white px-2">
      {/* Header */}
      <View className="header flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        {/*Ide csak
          a kis vackor az ídőpontomból */}

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs"> CheckIn Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#0098da" />
          </Text>
        </View>
        <UserIcon size={35} color="#0098da" />
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4  ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Szolgáltatók" keyboardType="default" />
        </View>

        <AdjustmentsVerticalIcon color="#0098da" />
      </View>

      {/* Body*/}

      <ScrollView
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Categories */}
        <Categories categories={categories} />

        {categories?.map((category) => {
          const { title, providers } = category.data;

          return (
            <View key={category.id}>
              {/* <FeaturedRow
                key={category.id}
                type={name}
                description={description}
                id={category.id}
                providers={providers}
              /> */}

              <Text>{category.id}</Text>

              <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
              >

                {providers.map( (provider) => {

                  return <ServiceCard key={provider} provider={provider}  />

                  } ) 
                }

              </ScrollView>


            </View>
          );
        })}


      </ScrollView>

        <Logout/>

    </SafeAreaView>
  );
};
