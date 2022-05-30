import { View, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import React, { useContext, useEffect } from "react";
import getEmptyPrayerObject from "../../api/EmptyPrayerObj";
import DatePicker from "react-native-styled-datepicker";
import { AppContext } from "../../api/SalahContext";
import { MemoizedPrayer } from "../../components/Prayer";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Current Date For Calender
const d = new Date();
var day;
if (!d.getDate()[1]) {
  day = d.getDate();
} else {
  day = d.getDate();
}
const currentDate =
  d.getFullYear() + "-" + d.toLocaleDateString().split("/")[0] + "-" + day;
//App
export default function SalahTracker() {
  const [selectedDate, setSelectedDate] = React.useState(currentDate);
  const [selectedObj, setSelectedObj] = React.useState(
    getEmptyPrayerObject(selectedDate)
  );
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    loadData();
  }, []);
  function filterObject(date) {
    let obj = state.filter((obj) => Object.keys(obj)[0] == date);
    if (obj.length == 0) {
      return getEmptyPrayerObject(date);
    } else {
      return obj[0];
    }
  }
  async function saveData() {
    try {
      await AsyncStorage.setItem("prayer-data", JSON.stringify(state));
      console.log(state);
    } catch (e) {
      console.log("Err:", e);
    }
  }
  async function loadData() {
    let data = null;
    try {
      data = await AsyncStorage.getItem("prayer-data");
      if (data != null) {
        data = JSON.parse(data);
        dispatch({ type: "LOAD", payload: data });
      }
    } catch (e) {
      console.log("Err", e);
    }
  }
  function handleDateChange(e) {
    setSelectedDate(e);
    dispatch({ type: "UPDATE_OBJECT", payload: selectedObj });
    const newObj = filterObject(e);
    setSelectedObj(newObj);
    saveData();
  }
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ height: "50%", marginTop: 20 }}>
        <DatePicker
          onChange={(e) => handleDateChange(e)}
          maxDate={currentDate}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <ScrollView vertical style={{ height: "46%" }}>
          <MemoizedPrayer
            imgUrl={() => require("../../assets/images/fajr.png")}
            number={0}
            selectedObject={selectedObj}
            setSelectedObject={setSelectedObj}
          />
          <MemoizedPrayer
            imgUrl={() => require("../../assets/images/zuhr.png")}
            number={1}
            selectedObject={selectedObj}
            setSelectedObject={setSelectedObj}
          />
          <MemoizedPrayer
            imgUrl={() => require("../../assets/images/asar.png")}
            number={2}
            selectedObject={selectedObj}
            setSelectedObject={setSelectedObj}
          />
          <MemoizedPrayer
            imgUrl={() => require("../../assets/images/maghrib.png")}
            number={3}
            selectedObject={selectedObj}
            setSelectedObject={setSelectedObj}
          />
          <MemoizedPrayer
            imgUrl={() => require("../../assets/images/esha.png")}
            number={4}
            selectedObject={selectedObj}
            setSelectedObject={setSelectedObj}
          />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  prayer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#efefef",
    paddingVertical: 10,
    alignItems: "center",
  },
  alone: {},
  jamat: {},
});
