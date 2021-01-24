import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet} from "react-native";


const Select = (props) => {
  return (
    <>
      <View style={styles.titleText}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.container}>
        <Picker
        style={styles.picker}
          selectedValue={props.selected}
          onValueChange={(val, idx) => props.setSelected(val)}
        >
          {props.data.map((item, index) => {
            return (
              <Picker.Item
                key={index}
                label={item.storeNumber}
                value={item.storeNumber}
              />
            );
          })}
        </Picker>
      </View>
    </>
  );
};

export default Select;

export const styles = StyleSheet.create({
  picker: {
      // justifyContent: "center",
      // color: "white"
      // width: 50,
      // alignSelf: "flex-end",
      paddingLeft: 25,

  },
  container: {
      // paddingTop: 40,
      // alignItems: "center",
      // borderColor: "white",
      borderRadius: 5,
      borderStyle: "solid",
      borderWidth: 1,
      // flex: 2,
      width: 150,
  },
  titleText: {
      flex: 1,
  },
  text: {
    // color: "white",
    // flex: 1,
    fontSize: 16,
    textTransform: "uppercase",
  }
});

