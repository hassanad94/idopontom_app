import { useState } from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const Calendar = ({ handleDate, date }) => {
  // const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    handleDate(currentDate);

    // let tempDate = new Date(currentDate);

    // let fDate =
    //   tempDate.getDate() +
    //   "/" +
    //   (tempDate.getMonth() + 1) +
    //   "/" +
    //   tempDate.getFullYear();

    // let formatedTime =
    //   "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();

    // console.log(fDate, formatedTime);
  };

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="spinner"
        onChange={onChange}
      />
    </View>
  );
};

export default Calendar;
