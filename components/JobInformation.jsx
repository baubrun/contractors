import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "./Select";
import { StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { getValues, sortedArray } from "../utils";
import {
  Input,
  Label,
  Item,
  Content,
  Form,
  Button,
  Text,
  Textarea,
} from "native-base";

import { jobState, addItems, addInfo } from "../redux/jobSlice";
import { storesState } from "../redux/storeSlice";

const jobInfoInitState = {
  firstName: "",
  lastName: "",
  storeNumber: "",
  date: new Date(),
  notes: "",
};

const JobInformation = (props) => {
  const dispatch = useDispatch();
  const { stores, loading } = useSelector(storesState);
  const { job } = useSelector(jobState);
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(jobInfoInitState);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || values.date;
    setShow(Platform.OS === "ios");
    setValues({ ...values, date: currentDate });
  };

  useEffect(() => {
    setValues({
      firstName: job.firstName,
      lastName: job.lastName,
      date: values.date,
      storeNumber: job.storeNumber,
      notes: job.notes,
    });
  }, [job]);

  const selectData = sortedArray(getValues(stores, "storeNumber"));

  return (
    <>
      <Content>
        <Form>
          <Item style={styles.inputs}>
            <Label style={styles.label}>First Name</Label>
            <Input
              style={styles.inputs}
              onChangeText={(text) =>
                setValues({ ...values, firstName: text })
              }
              value={values.firstName}
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.label}>Last Name</Label>
            <Input
              onChangeText={(text) =>
                setValues({ ...values, lastName: text })
              }
              value={values.lastName}
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.selectLabel}>STORE #</Label>
            <Select
              data={selectData}
              item="storeNumber"
              selected={values.storeNumber}
              setSelected={setValues}
              values={values}
            />
          </Item>

          <Item style={styles.inputs}>
            <View style={styles.dateLabel}>
              <Button onPress={() => setShow(true)}>
                <Text>change date</Text>
              </Button>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={values.date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}

            <View>
              <Label>{values.date.toString().substring(4, 15)}</Label>
            </View>
          </Item>

          <Textarea
            style={styles.notes}
            rowSpan={5}
            bordered
            onChangeText={(text) =>
              setValues({ ...values, notes: text })
            }
            placeholder="NOTES..."
            value={values.notes}
          />

          <Button onPress={() => 
            {
              props.navigation.navigate("Items");
              dispatch(addInfo(values))
            }
            
            }>
            <Text>NEXT</Text>
          </Button>
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
  notes: {
    margin: 10,
  },
});
