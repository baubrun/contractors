import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, Platform } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";

import AssembledItems from "./AssembledItem";
import JobInformation from "./JobInformation";
import ConfirmJob from "./ConfirmJob";

import { listStores, storesState } from "../redux/storeSlice";
import { listItemSku } from "../redux/itemsSlice";
import { addItems, addJob } from "../redux/jobSlice";

import _ from "lodash";

const defaultState = {
  firstName: "",
  lastName: "",
  itemDescription: "",
  PO: "",
  qty: "",
  assemblySku: "",
  itemSku: "",
  storeNumber: "",
  date: new Date(),
  storeNumber: "",
  notes: "",
  items: [],
};

const JobContainer = () => {
  const dispatch = useDispatch();
  const { stores, loading } = useSelector(storesState);
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(defaultState);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || values.date;
    setShow(Platform.OS === "ios");
    setValues({ ...values, date: currentDate });
  };

  const resetAssembledItems = () => {
    setValues({
      ...values,
      assemblySku: "",
      itemDescription: "",
      itemSku: "",
      qty: "",
    });
  };

  const resetValues = () => {
    setValues(defaultState);
  };

  const addJobItems = () => {
    handleSubmit();
    dispatch(
      addItems({
        items: _.pick(values, [
          "assemblySku",
          "itemDescription",
          "itemSku",
          "qty",
        ]),
      })
    );
    resetAssembledItems();
  };

  const handleSubmit = () => {
    dispatch(
      addJob({
        date: values.date.toString(),
        firstName: values.firstName,
        lastName: values.lastName,
        PO: values.PO,
        storeNumber: values.storeNumber,
        notes: values.notes,
      })
    );
    resetValues();
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
              onChange={onChange}
              show={show}
              setShow={setShow}
              setValues={setValues}
              stores={stores}
              values={values}
            />
          </Tab>

          <Tab heading="ASSEMBLED ITEMS">
            <AssembledItems
              addItems={addJobItems}
              setValues={setValues}
              values={values}
            />
          </Tab>

          <Tab heading="CONFIRM">
            <ConfirmJob handleSubmit={handleSubmit} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default JobContainer;
