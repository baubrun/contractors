import React, { useState, useEffect } from "react";
import Select from "./Select";
import { Input, Label, Item, Content, Form } from "native-base";
import { StyleSheet, View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const JobInformation = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };



  return (
    <>
      <Content>
        <Form>
          <Item style={styles.inputs}>
            <View style={styles.label}>
              <Button onPress={() => setShow(true)} title="ENTER DATE" />
            </View>
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.label}>First Name</Label>
            <Input
              style={styles.inputs}
              onChangeText={(text) =>
                props.setValues({ ...props.values, firstName: text })
              }
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.label}>Last Name</Label>
            <Input
              onChangeText={(text) =>
                props.setValues({ ...props.values, lastName: text })
              }
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.selectLabel}>STORE #</Label>
            <Select
              data={props.stores}
              selected={props.storeNumber}
              setSelected={props.setStoreNumber}
            />
          </Item>
        </Form>
      </Content>
    </>
  );
};

export default JobInformation;

export const styles = StyleSheet.create({
  inputs: {
    marginVertical: 10,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  label: {
    color: "blue",
    marginRight: 30,
  },
  selectLabel: {
    marginRight: 100,
    color: "blue",
  },
});
