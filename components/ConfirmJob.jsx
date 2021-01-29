import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Content, Container, Button, Text, List, ListItem } from "native-base";

import { jobState, createJob } from "../redux/jobSlice";
import MessageModal from "./MessageModal";
import moment from "moment";

const ConfirmJob = (props) => {
  const dispatch = useDispatch();

  const { job, success, message } = useSelector(jobState);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(success);
  }, [success]);

  const handleSubmit = () => {
    dispatch(createJob());
  };

  // if (job.items < 1 && !modalVisible) {
  //   return (
  //     <Container style={styles.section}>
  //       <Text>ADD JOB ITEMS.</Text>
  //     </Container>
  //   );
  // }

  if (modalVisible) {
    <MessageModal
      modalVisible={modalVisible}
      message={`job Id: ${message.slice(-4)}`}
      setModalVisible={setModalVisible}
      redirect={props.navigation.navigate}
    />;
  }

  return (
    <>
      <Content>
        <List scrollEnabled>
          <ListItem>
            <Text> Name: {`${job.firstName} ${job.lastName}`}</Text>
          </ListItem>
          <ListItem>
            <Text> STORE #: {job.storeNumber}</Text>
          </ListItem>
          <ListItem>
            <Text> DATE: {moment(job.date).format("L")}</Text>
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

        <Button
          full
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text>SUBMIT JOB</Text>
        </Button>
      </Content>
    </>
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
