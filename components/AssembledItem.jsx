import React from "react";
import { useSelector } from "react-redux";
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


const AssembledItem = (props) => {
  const { assemblyNumbers, itemNumbers } = useSelector(itemsState);

  return (
    <Content>
      <List>
        <ListItem>
          <Label style={styles.label}>PO #</Label>
          <Input
            keyboardType="numeric"
            onChangeText={(text) =>
              props.setValues({ ...props.values, PO: text })
            }
            value={props.values.PO}
          />
        </ListItem>

        <ListItem itemDivider style={styles.section}>
          <Text>ENTER ITEM NAME OR A SKU #</Text>
        </ListItem>
        <ListItem>
          <Label style={styles.label}>item name</Label>
          <Input
            onChangeText={(text) =>
              props.setValues({ ...props.values, itemDescription: text })
            }
            value={props.values.itemDescription}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>Assembly sku #</Label>
          <Select
            data={assemblyNumbers}
            item="assemblySku"
            selected={props.values.assemblySku}
            setSelected={props.setValues}
            values={props.values}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>item sku #</Label>
          <Select
            data={itemNumbers}
            item="itemSku"
            selected={props.values.itemSku}
            setSelected={props.setValues}
            values={props.values}
          />
        </ListItem>

        <ListItem>
          <Label style={styles.label}>qty</Label>
          <Input
            keyboardType="numeric"
            onChangeText={(text) =>
              props.setValues({ ...props.values, qty: text })
            }
            value={props.values.qty}
          />
        </ListItem>
      </List>
      <Button
        full
        onPress={() => props.addItems()}
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
