import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { listRates, ratesState } from "../redux/ratesSlice";
import { listStores, storesState } from "../redux/storeSlice";
import store from "../redux/store";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";

import AssembledItems from "./AssembledItems";
import JobInformation from "./JobInformation";

const JobContainer = () => {
  const dispatch = useDispatch();
  const { rates } = useSelector(ratesState);
  const { stores, loading } = useSelector(storesState);
  const [storeNumber, setStoreNumber] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
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
      <Container>
        <Header hasTabs />

          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="JOB INFO">
              <JobInformation
              stores={stores} 
              storeNumber={storeNumber} 
              setStoreNumber={setStoreNumber} 
              setValues={setValues}
              values={values}
              />
            </Tab>

            <Tab heading="ASSEMBLED ITEMS">
              <AssembledItems />
            </Tab>

          </Tabs>

      </Container>
    </>
  );
};

export default JobContainer;

