import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, Platform } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab,  } from "native-base";

import AssembledItems from "./AssembledItem";
import JobInformation from "./JobInformation";
import ConfirmJob from "./ConfirmJob";

import { listStores, storesState } from "../redux/storeSlice";
import { listItemSku } from "../redux/itemsSlice";


const JobContainer = () => {
  const dispatch = useDispatch();
  const { stores, loading } = useSelector(storesState);
    const [date, setDate] = useState(new Date());
  const [storeNumber, setStoreNumber] = useState("");
  const [show, setShow] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    stores: [],
    storeData: [],
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };





  useEffect(() => {
    dispatch(listStores());
    dispatch(listItemSku());
  }, []);

  

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="red" />
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
              date={date}
              onChange={onChange}
              show={show}
              setShow={setShow}

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

          <Tab heading="CONFIRM">
            <ConfirmJob />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default JobContainer;
