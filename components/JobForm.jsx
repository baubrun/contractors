import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";

import Input from "./Input";
import Select from "./Select";

import { listRates, ratesState } from "../redux/ratesSlice";
import { listStores, storesState } from "../redux/storeSlice";
import store from "../redux/store";

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
        <Input placeholder="First Name" />
        <Select
          data={stores}
          selected={selected}
          setSelected={setSelected}
          title="select store #"
        />
      </View>
    </>
  );
};

export default JobForm;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "#1c2c91",
    // flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
    // padding: 10,
    // paddingTop: 20,
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
