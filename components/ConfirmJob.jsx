import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  Content,
  Button,
  Text,
  List,
  ListItem,
} from "native-base";

import { jobState } from "../redux/jobSlice";

const ConfirmJob = (props) => {
  const dispatch = useDispatch();
  const { job } = useSelector(jobState);

  if (job.items < 1) {
    return <Text>NO JOB ADDED.</Text>;
  }

  return (
    <Content>
      <List scrollEnabled>
        <ListItem>
          <Text> Name: {`${job.firstName} ${job.lastName}`}</Text>
        </ListItem>
        <ListItem>
          <Text> STORE #: {job.storeNumber}</Text>
        </ListItem>
        <ListItem>
          <Text> DATE: {job.date.substring(4, 15)}</Text>
        </ListItem>
        <ListItem>
          <Text> PO #: {job.PO}</Text>
        </ListItem>

        <ListItem itemDivider>
          <View style={styles.section}>
            <Text>ITEMS</Text>
          </View>
        </ListItem>
        {job.items.length > 0 &&
          job.items.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <ListItem>
                  <View style={styles.section}>
                  <Text style={styles.itemCount}>ITEM # {idx + 1}</Text>
                  </View>
                </ListItem>
                <ListItem>
                  <Text> ITEM NAME: {item.itemDescription}</Text>
                </ListItem>
                <ListItem>
                  <Text> ASSEMBLY SKU #: {item.assemblySku}</Text>
                </ListItem>
                <ListItem>
                  <Text> ITEM SKU #: {item.itemSku}</Text>
                </ListItem>
                <ListItem>
                  <Text> QTY: {item.qty}</Text>
                </ListItem>
              </React.Fragment>
            );
          })}
      </List>


      <Button full onPress={() => props.handleSubmit()}>
        <Text>SUBMIT JOB</Text>
      </Button>
    </Content>
  );
};

export default ConfirmJob;

export const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemCount: {
    color: "blue",
  },
});
