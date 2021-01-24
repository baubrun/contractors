import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, StyleSheet } from "react-native";

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
    // dispatch(listRates());
  }, []);

  useEffect(() => {
    // if (stores) {
    setValues({ ...values, storeData: stores });
    // }
  }, [stores]);

  if (loading || store.length < 1) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )}


  return (
    <View style={styles.container}>
      <Input placeholder="Search" />
      <Select
        data={stores}
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );

};

export default JobForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "#1de9b6",
    padding: 10,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
