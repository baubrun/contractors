import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux"
import { StyleSheet } from "react-native";
import { Input, Label, Item, Content, Form, Button, Text } from "native-base";

import Select from "./Select"
import {addItem} from "../redux/jobSlice"
import { add } from "react-native-reanimated";


const defaultValues = {
    assemblySku: "",
    itemDescription: "",
    itemSku: "",
    qty: null,
}

const AssembledItems = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState(defaultValues)


    return (
        <Content>
        <Form>

          <Item style={styles.inputs}>
            <Label style={styles.label}>item name</Label>
            <Input
              style={styles.inputs}
              onChangeText={(text) =>
                setValues({ ...values, item: text })
              }
            />
          </Item>

          {/* <Item style={styles.inputs}>
            <Label style={styles.selectLabel}>ASSEMBLY SKU
            </Label>
            <Select
              item="assemblySku"
              data={props.stores}
              selected={props.storeNumber}
              setSelected={props.setStoreNumber}
            />
          </Item> */}


          <Item style={styles.inputs}>
            <Label style={styles.label}>Assembly sku #</Label>
            <Input
              onChangeText={(text) =>
                setValues({ ...values, assemblySku: text })
              }
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.label}>sku #</Label>
            <Input
              onChangeText={(text) =>
                setValues({ ...values, sku: text })
              }
            />
          </Item>

          <Item style={styles.inputs}>
            <Label style={styles.label}>item name</Label>
            <Input
              style={styles.inputs}
              onChangeText={(text) =>
                setValues({ ...values, item: text })
              }
            />
          </Item>



          <Item style={styles.inputs}>
          <Button onPress={() => {
              dispatch(addItem(values));
              setValues(defaultValues)
          }}>
            <Text>Add Item</Text>
          </Button>
          </Item>



        </Form>
      </Content>
    )
}

export default AssembledItems


export const styles = StyleSheet.create({
    inputs: {
      marginVertical: 10,
      marginRight: 20,
      paddingHorizontal: 10,
    },
    label: {
      color: "blue",
      marginRight: 30,
      textTransform: "uppercase"
    },
    selectLabel: {
      marginRight: 100,
      color: "blue",
    },
    
  });
  