import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";
function Prayer({ imgUrl, number, selectedObject, setSelectedObject }) {
  const date = Object.keys(selectedObject)[0];
  let details = selectedObject[date];

  function updateObj(type, obj, date, targetIndex, isOffered) {
    let newArr = [];
    if (type === "alone") {
      for (let i = 0; i < obj[date].length; i++) {
        if (i === targetIndex) {
          newArr.push({
            isOffered: isOffered,
            offeredWithJamat:
              isOffered === true ? obj[date][i].offeredWithJamat : false,
          });
        } else {
          newArr.push(obj[date][i]);
        }
      }
    } else if (type === "jamat") {
      for (let i = 0; i < obj[date].length; i++) {
        if (i === targetIndex) {
          newArr.push({
            offeredWithJamat: isOffered,
            isOffered: obj[date][i].isOffered,
          });
        } else {
          newArr.push(obj[date][i]);
        }
      }
    }
    let newObj = {};
    newObj[date] = newArr;
    return newObj;
  }
  function handleAlone() {
    if (selectedObject[date][number].isOffered == false) {
      //means unchecked
      let updatedObject = updateObj(
        "alone",
        selectedObject,
        date,
        number,
        true
      );
      setSelectedObject(updatedObject);
    } else if (selectedObject[date][number].isOffered == true) {
      //means checked
      let updatedObject = updateObj(
        "alone",
        selectedObject,
        date,
        number,
        false
      );
      setSelectedObject(updatedObject);
    }
  }
  function handleJamat() {
    if (selectedObject[date][number].offeredWithJamat == false) {
      let updatedObject = updateObj(
        "jamat",
        selectedObject,
        date,
        number,
        true
      );
      setSelectedObject(updatedObject);
    } else if (selectedObject[date][number].offeredWithJamat == true) {
      let updatedObject = updateObj(
        "jamat",
        selectedObject,
        date,
        number,
        false
      );
      setSelectedObject(updatedObject);
    }
  }

  return (
    <View>
      <View style={styles.prayer}>
        <Image source={imgUrl()} style={{ width: 35, height: 35 }} />
        {selectedObject[date][number].isOffered && (
          <Image
            source={require("../assets/images/alhamdulilah.png")}
            style={{ width: 45, height: 35 }}
          />
        )}
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Image
              source={require("../assets/images/shalat.png")}
              style={[{ width: 35, height: 35 }, styles.jamat]}
            />
            <Checkbox
              status={
                selectedObject[date][number].offeredWithJamat
                  ? "checked"
                  : "unchecked"
              }
              disabled={!selectedObject[date][number].isOffered}
              onPress={() => handleJamat()}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/praying.png")}
              style={[{ width: 35, height: 35 }, styles.alone]}
            />
            <Checkbox
              status={
                selectedObject[date][number].isOffered ? "checked" : "unchecked"
              }
              onPress={() => handleAlone()}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prayer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#efefef",
    paddingVertical: 10,
    alignItems: "center",
  },
  jamat: {},
  alone: {},
});

export const MemoizedPrayer = React.memo(Prayer);
