import React from "react";
import Select from "./Select";
import { Input, Label, Item, Content, Form } from "native-base";
import { StyleSheet, View } from "react-native";

const JobInformation = (props) => {
  return (
    <>
      <Content>
        <Form>
          <Item style={styles.inputs}>
            <Label>First Name</Label>
            <Input
              style={styles.inputs}
              onChangeText={(text) =>
                props.setValues({ ...props.values, firstName: text })
              }
            />
          </Item>

          <Item style={styles.inputs}>
            <Label>Last Name</Label>
            <Input
              onChangeText={(text) =>
                props.setValues({ ...props.values, lastName: text })
              }
            />
          </Item>

          <Item style={styles.inputs}>
            <Label>STORE #</Label>
            <Select
              data={props.stores}
              selected={props.storeNumber}
              setSelected={props.setStoreNumber}
            />
          </Item>
        </Form>
      </Content>
    </>
  );
};

export default JobInformation;

export const styles = StyleSheet.create({
  inputs: {
    marginVertical: 10,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  btn: {
    margin: 20,
  },
  bntText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
