import React from "react";
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
