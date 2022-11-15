import {
  Modal,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

import { useState } from "react";
import Calendar from "./Calendar";

// const deviceHeight = Dimensions.get("window").height;

const BottomPopup = ({
  handleDate,
  date,
  handleClose,
  showPopup,
  handleOpen,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showPopup}
      onRequestClose={handleClose}
    >
      <View className="flex-1 justify-end">
        <View className="bg-white w-100 rounded-t-md h-[40vh]">
          <View className="bg-[#eeeeee] py-2">
            <Button onPress={handleClose} title="Kiválasztom">
              Confirm
            </Button>
          </View>

          <View className="border-t bg-white">
            <Calendar handleDate={handleDate} date={date} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomPopup;
