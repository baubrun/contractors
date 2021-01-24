import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const Select = (props) => {
  return (
    <Picker
    style={styles.container}
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
  );
};

export default Select;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});