import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "native-base";

const Select = (props) => {
  return (
    <>
      <Picker
        mode="dialog"
        selectedValue={props.selected}
        onValueChange={(val, idx) => props.setSelected(val)}
      >
        <Picker.Item label="" value="key0" />
        {props.data.map((item, idx) => {
          return (
            <Picker.Item
              key={idx}
              label={item.storeNumber}
              value={item.storeNumber}
            />
          );
        })}
      </Picker>
    </>
  );
};

export default Select;
