import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import {
  Input,
  Label,
  Item,
  Content,
  Form,
  Button,
  Text,
  List,
  ListItem,
} from "native-base";

import Select from "./Select";
import { addItem } from "../redux/jobSlice";

const defaultValues = {
  assemblySku: "",
  itemDescription: "",
  itemSku: "",
  PO: null,
  qty: null,
};

const AssembledItems = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(defaultValues);

  return (
    <Content>
      <List>
        <ListItem>
          <Label style={styles.label}>PO #</Label>
          <Input
            // style={styles.inputs}
            onChangeText={(text) => setValues({ ...values, PO: text })}
          />
        </ListItem>

        <ListItem itemDivider style={styles.section}>
          <Item>
            <Text>ENTER ITEM NAME OR A SKU #</Text>
          </Item>
        </ListItem>


      </List>
      <Form>
        <Item >
          <Label style={styles.label}>item name</Label>
          <Input
            onChangeText={(text) => setValues({ ...values, item: text })}
          />
        </Item>


        <ListItem >
          <Label style={styles.label}>Assembly sku #</Label>
          <Input
            onChangeText={(text) => setValues({ ...values, assemblySku: text })}
          />
        </ListItem>

        <ListItem >
          <Label style={styles.label}>item sku #</Label>
          <Input onChangeText={(text) => setValues({ ...values, sku: text })} />
        </ListItem>

        <ListItem itemDivider style={{ paddingLeft: "40%" }}>
          <Item>
            <Text>QUANTITY</Text>
          </Item>
        </ListItem>


        <Item >
          <Label style={styles.label}>qty</Label>
          <Input
            // style={styles.inputs}
            onChangeText={(text) => setValues({ ...values, qty: text })}
          />
        </Item>

        <Item >
          <Button
            onPress={() => {
              dispatch(addItem(values));
              setValues(defaultValues);
            }}
          >
            <Text>Add Item</Text>
          </Button>
        </Item>
      </Form>
    </Content>
  );
};

export default AssembledItems;

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
  }
});
