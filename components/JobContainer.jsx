import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, Platform } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab, Item,  } from "native-base";

import AssembledItems from "./AssembledItem";
import JobInformation from "./JobInformation";
import ConfirmJob from "./ConfirmJob";

import { listStores, storesState } from "../redux/storeSlice";
import { listItemSku } from "../redux/itemsSlice";
import { addItem } from "../redux/jobSlice";


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
}




const JobContainer = () => {
  const dispatch = useDispatch();
  const { stores, loading } = useSelector(storesState);
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(defaultState)


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || values.date;
    setShow(Platform.OS === "ios");
    setValues({...values, date: currentDate});
  };


  const resetAssembledItems = () => {
    setValues({
      ...values,
      assemblySku: "",
      itemDescription: "",
      itemSku: "",  
      qty: "",    
    })
  }

  const createItem = () => {
    dispatch(addItem(
      { 
        assemblySku: values.assemblySku,
        itemDescription: values.itemDescription,
        itemSku: values.itemSku,  
        qty: values.qty,    
      }))
    resetAssembledItems()
  };


  const handleSubmit = () => {
    dispatch(addItem(values))
  }



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
              addItem={createItem}
              setValues={setValues}
              values={values}
            />
          </Tab>

          <Tab heading="CONFIRM">
            <ConfirmJob 
            handleSubmit={handleSubmit}
            />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default JobContainer;
