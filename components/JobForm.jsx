import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";

import Input from "./Input";
import Select from "./Select";

import { listRates, ratesState } from "../redux/ratesSlice";
import { listStores, storesState } from "../redux/storeSlice";
import store from "../redux/store";
import Row from "./Row";
import Column from "./Column";

const JobForm = () => {
  const dispatch = useDispatch();
  const { rates } = useSelector(ratesState);
  const { stores, loading } = useSelector(storesState);
  const [selected, setSelected] = useState("");
  const [values, setValues] = useState({
    submittedText: "",
    stores: [],
    storeData: [],
  });

  useEffect(() => {
    dispatch(listStores());
    dispatch(listRates());
  }, []);

  useEffect(() => {
    setValues({ ...values, storeData: stores });
  }, [stores]);

  if (loading || store.length < 1) {
    return (
      <View>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Row>
          <Column>
            <Input label="First Name" placeholder="First Name" />
            <Select
              data={stores}
              selected={selected}
              setSelected={setSelected}
              title="select store #"
            />
          </Column>
        </Row>
      </View>
    </>
  );
};

export default JobForm;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    flex: 1,
  },
  titleText: {
    // color: "white",
    fontSize: 16,
    textTransform: "uppercase",
    // marginBottom: 16
  },
});
