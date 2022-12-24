import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import BottomPopup from "../components/BottomPopup";
import { useState, useEffect } from "react";
import TimeBrick from "../components/TimeBrick";

const ReservationScreen = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const [date, setDate] = useState(new Date());
  let temporaryDate = date;

  const handleClose = () => {
    setDate(temporaryDate);
    setShowPopUp(false);
  };

  const handleOpen = () => {
    setShowPopUp(true);
  };

  const handleDate = (date) => (temporaryDate = date);

  useEffect(() => {
    // console.log(date, temporaryDate);

    // return () => {
    //   second
    // }
  }, [date]);

  return (
    <SafeAreaView className="justify-between flex-1">
      <View>
        <TouchableOpacity onPress={handleOpen}>
          <View className="py-5 justify-center items-center bg-primary border border-primary">
            <Text className=" text-white text-2xl">{`${date
              .toISOString()
              .slice(0, 10)}`}</Text>
          </View>
        </TouchableOpacity>
        <BottomPopup
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleDate={handleDate}
          showPopup={showPopUp}
          date={temporaryDate}
          title="teszt"
        />
      </View>

      <ScrollView
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="flex-wrap flex-row items-center justify-between px-1">
          <TimeBrick value={"11:30"} />
          <TimeBrick value={"11:30"} />
          <TimeBrick value={"11:30"} />
          <TimeBrick value={"11:30"} />
          <TimeBrick value={"11:30"} />
          <TimeBrick value={"11:30"} />
          <TimeBrick value={"11:30"} />
        </View>
      </ScrollView>
      <View className="mt-3 p-5 bg-white">
        <View className="flex-row mb-1 justify-between">
          <Text className="text-gray-400"> Foglalás Napja </Text>
          <Text className="text-gray-400">
            {" "}
            {`${date.toISOString().slice(0, 10)}`}{" "}
          </Text>
        </View>
        <View className="flex-row mb-1 justify-between">
          <Text className="text-gray-400"> Ídőpont </Text>
          <Text className="text-gray-400">11:30 - 12:30</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400"> Szolgáltatást </Text>
          <Text className="text-gray-400">Szolgáltatás Neve</Text>
        </View>
        <TouchableOpacity className="rounded-lg mt-3 bg-primary p-4">
          <Text className="text-center text-white text-lg font-bold">
            Foglalás véglegesítése
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReservationScreen;
