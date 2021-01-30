import React from "react";
import { Picker } from "native-base";



const Select = (props) => {

  return (
    <>
      <Picker
        mode="dialog"
        selectedValue={props.selected}
        onValueChange={
          (val, idx) => props.setSelected({...props.values, [props.item]: val})}
      >
        <Picker.Item label="" value="" />
        {props.data.map((item, idx) => {
          return (
            <Picker.Item
              key={idx}
              label={item}
              value={item}
            />
          );
        })}
      </Picker>
    </>
  );
};

export default Select;
