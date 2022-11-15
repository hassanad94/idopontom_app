import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BottomPopup from "../components/BottomPopup";
import { useState, useEffect } from "react";

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
    console.log(date, temporaryDate);

    // return () => {
    //   second
    // }
  }, [date]);

  return (
    <View>
      {/* <Calendar /> */}
      {/* <Calendar /> */}
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
      <Text>10:30</Text>
      <Text>10:30</Text>
      <Text>10:30</Text>
      <Text>10:30</Text>
      <Text>10:30</Text>
      <Text onPress={handleOpen}>10:30</Text>
    </View>
  );
};

export default ReservationScreen;
