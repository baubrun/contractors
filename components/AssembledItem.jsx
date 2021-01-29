import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import {
  Input,
  Label,
  Content,
  Button,
  Text,
  List,
  ListItem,
} from "native-base";

import { itemsState } from "../redux/itemsSlice";
import { addItems } from "../redux/jobSlice";
import Select from "./Select";
import { disableBtn } from "../utils";

const defaultItemsState = {
  assemblySku: "",
  itemSku: "",
  itemDescription: "",
  qty: "",
};

const AssembledItem = (props) => {
  const dispatch = useDispatch();
  const { assemblyNumbers, itemNumbers } = useSelector(itemsState);
  const [values, setValues] = useState(defaultItemsState);



  const reset = () => {
    setValues(defaultItemsState);
  };

  return (
    <Content>
      <List>

        <ListItem itemDivider style={styles.section}>
          <Text>ENTER ITEM NAME OR A SKU #</Text>
        </ListItem>
        <ListItem>
          <Label style={styles.label}>item name</Label>
          <Input
            onChangeText={(text) =>
              setValues({ ...values, itemDescription: text })
            }
            value={values.itemDescription}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>Assembly sku #</Label>
          <Select
            data={assemblyNumbers}
            item="assemblySku"
            selected={values.assemblySku}
            setSelected={setValues}
            values={values}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>item sku #</Label>
          <Select
            data={itemNumbers}
            item="itemSku"
            selected={values.itemSku}
            setSelected={setValues}
            values={values}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>qty</Label>
          <Input
            keyboardType="numeric"
            onChangeText={(text) => setValues({ ...values, qty: text })}
            value={values.qty}
          />
        </ListItem>
      </List>
      <Button
      style={styles.btn}
        full
        onPress={() => {
          dispatch(addItems(values));
          reset()
        }}
      >
        <Text>Add Item</Text>
      </Button>

      <Button
      disabled={disableBtn(
        [
          values.itemDescription,
          values.assemblySku
        ]
        )}
      success
      style={styles.btn}
        full
        onPress={() => {
          dispatch(addItems(values));
          reset()
          props.navigation.navigate("Confirm");
        }}
      >
        <Text>NEXT</Text>
      </Button>
    </Content>
  );
};

export default AssembledItem;

export const styles = StyleSheet.create({
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
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginVertical: 5,
  }
});
