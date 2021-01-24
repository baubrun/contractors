import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View, StyleSheet  } from "react-native";
import { listRates, ratesState } from "../redux/ratesSlice";
import { listStores, storesState } from "../redux/storeSlice";
import store from "../redux/store";
import Select from "./Select";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from "native-base";

const JobForm = () => {
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
        <Header />
        <Content>
          <Form>
            <Item fixedLabel style={styles.inputs}>
              <Label>First Name</Label>
              <Input
                onChangeText={(text) =>
                  setValues({ ...values, firstName: text })
                }
              />
            </Item>
            <Item fixedLabel style={styles.inputs}>
              <Label>Last Name</Label>
              <Input
                onChangeText={(text) =>
                  setValues({ ...values, lastName: text })
                }
              />
            </Item>
            <Item fixedLabel style={styles.inputs}>
              <Label>STORE #</Label>
              <Select
                data={stores}
                selected={storeNumber}
                setSelected={setStoreNumber}
              />
            </Item>
              <Button block primary>
                <Text>SUBMIT</Text>
              </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default JobForm;

export const styles = StyleSheet.create({
  inputs: {
    marginVertical: 10,
    marginRight: 20,
    paddingHorizontal: 10,
  },
});
