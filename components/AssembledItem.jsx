import React, { useState, } from "react";
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
import Select from "./Select";
import { addItem } from "../redux/jobSlice";


const defaultState = {
  itemDescription: "",
  PO: "",
  qty: "",
}


const AssembledItem = () => {
  const dispatch = useDispatch();
  const { assemblyNumbers, itemNumbers } = useSelector(itemsState);
  const [assemblySku, setAssemblySku] = useState("");
  const [itemSku, setItemSku] = useState("");
  const [values, setValues] = useState(defaultState);

  const resetStates = () => {
    setValues(defaultState);
    setAssemblySku("");
    setItemSku("");
  };

  const createItem = () => {
    const item = {
      ...values,
      assemblySku,
      itemSku,
    };

    dispatch(addItem(item));
    resetStates();
  };

  return (
    <Content>
      <List>
        <ListItem>
          <Label style={styles.label}>PO #</Label>
          <Input
            keyboardType="numeric"
            onChangeText={(text) => setValues({ ...values, PO: text })}
            value={values.PO}
          />
        </ListItem>

        <ListItem itemDivider style={styles.section}>
          <Text>ENTER ITEM NAME OR A SKU #</Text>
        </ListItem>
        <ListItem>
          <Label style={styles.label}>item name</Label>
          <Input
            onChangeText={(text) => setValues({ ...values, item: text })}
            value={values.itemDescription}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>Assembly sku #</Label>
          <Select
            item="assemblySku"
            data={assemblyNumbers}
            selected={assemblySku}
            setSelected={setAssemblySku}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>item sku #</Label>
          <Select
            item="itemSku"
            data={itemNumbers}
            selected={itemSku}
            setSelected={setItemSku}
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
          full
          onPress={() => createItem()}
        >
          <Text>Add Item</Text>
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
    paddingLeft: "25%",
  },
});
