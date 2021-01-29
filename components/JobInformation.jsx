import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "./Select";
import { StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFocusEffect } from "@react-navigation/native";
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

import { jobState, addInfo } from "../redux/jobSlice";
import moment from "moment";
import { listStores, storesState } from "../redux/storeSlice";
import { listItemSku } from "../redux/itemsSlice";
import { disableBtn } from "../utils";

const jobInfoInitState = {
  firstName: "",
  lastName: "",
  storeNumber: "",
  PO: "",
  date: moment().toDate(),
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
    dispatch(listStores());
    dispatch(listItemSku());
  }, []);

  const dateString = (date) => {
    if (!date) {
      return moment().toDate();
    }
    return moment(date).toDate();
  };

  useFocusEffect(
    useCallback(() => {
      setValues({
        firstName: job.firstName,
        lastName: job.lastName,
        storeNumber: job.storeNumber,
        PO: job.PO,
        date: dateString(job.date),
        notes: job.notes,
      });

      return () => {};
    }, [job])
  );

  const reset = () => {
    setValues(jobInfoInitState);
  };

  const selectData = sortedArray(getValues(stores, "storeNumber"));

  return (
    <>
      <Content>
        <Form>
          <Item style={styles.inputs}>
            <Label style={styles.label}>First Name</Label>
            <Input
              style={styles.inputs}
              onChangeText={(text) => setValues({ ...values, firstName: text })}
              value={values.firstName}
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.label}>Last Name</Label>
            <Input
              onChangeText={(text) => setValues({ ...values, lastName: text })}
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
            <Label style={styles.label}>PO #</Label>
            <Input
              keyboardType="numeric"
              onChangeText={(text) => setValues({ ...values, PO: text })}
              value={values.PO}
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
              <Label>{moment(values.date).format("L")}</Label>
            </View>
          </Item>

          <Textarea
            style={styles.notes}
            rowSpan={4}
            bordered
            onChangeText={(text) => setValues({ ...values, notes: text })}
            placeholder="NOTES..."
            value={values.notes}
          />

          <Button
            disabled={disableBtn([
              values.firstName,
              values.lastName,
              values.storeNumber,
            ])}
            full
            onPress={() => {
              dispatch(
                addInfo({
                  ...values,
                  date: moment(values.date).format(),
                })
              );
              props.navigation.navigate("Items");
            }}
          >
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
    paddingVertical: 5,
  },

  inputs: {
    marginVertical: 5,
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
