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

const defaultItemsState = {
  qty: "",
  assemblySku: "",
  itemSku: "",
  itemDescription: "",
};

const AssembledItem = (props) => {
  const dispatch = useDispatch();
  const { assemblyNumbers, itemNumbers } = useSelector(itemsState);
  const [values, setValues] = useState(defaultItemsState);

  // useEffect(() => {
  //   setValues({
  //     PO: job.PO,
  //     qty: job.qty,
  //     assemblySku: job.assemblySku,
  //     itemSku: job.itemSku,
  //   });
  // }, [job]);

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
        full
        onPress={() => {
          props.navigation.navigate("Confirm");
          dispatch(addItems(values));
        }}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
