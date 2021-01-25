import React, { useState } from "react";
import Select from "./Select";
import { StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { getValues, sortedArray } from "../utils";
import { Input, Label, Item, Content, Form, Button, Text } from "native-base";

const JobInformation = (props) => {
  const selectData = sortedArray(getValues(props.stores, "storeNumber"));

  return (
    <>
      <Content>
        <Form>
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
              item="storeNumber"
              data={selectData}
              selected={props.storeNumber}
              setSelected={props.setStoreNumber}
            />
          </Item>

          <Item style={styles.inputs}>
            <View style={styles.dateLabel}>
              <Button onPress={() => props.setShow(true)}>
                <Text>change date</Text>
              </Button>
            </View>
            {props.show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={props.date}
                mode="date"
                display="default"
                onChange={props.onChange}
              />
            )}

            <View>
              <Label>{props.date.toString().substring(4, 15)}</Label>
            </View>
          </Item>


        </Form>
      </Content>
    </>
  );
};

export default JobInformation;

export const styles = StyleSheet.create({
  dateLabel: {
    marginRight: 100,
    paddingVertical: 10,
  },

  inputs: {
    marginVertical: 10,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  label: {
    color: "blue",
    marginRight: 30,
    textTransform: "uppercase",
  },
  selectLabel: {
    marginRight: 100,
    color: "blue",
  },
});
