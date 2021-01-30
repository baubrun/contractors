import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Content, Button, Text, List, ListItem } from "native-base";

import { jobState, createJob, clearError, clearJob } from "../redux/jobSlice";
import moment from "moment";

import ModalScreen from "./ModalScreen";

const ConfirmJob = (props) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { job, loading, success, message } = useSelector(jobState);

  useEffect(() => {
    setModalVisible(success);
  }, [success]);

  const handleSubmit = () => {
    dispatch(createJob());
  };

  const redirectJobSuccess = () => {
    dispatch(clearJob());
    dispatch(clearError());
    props.navigation.navigate("JobInfo");
  };

  return (
    <>
      {success ? (
        <ModalScreen
          message={`Job submitted successfully.\nJOB ID: ${message.slice(-4)}`}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          redirect={redirectJobSuccess}
        />
      ) : (
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
      )}
      {loading && (
        <View style={styles.section}>
          <ActivityIndicator size="large" />
        </View>
      )}
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
  spinner: {
    zIndex: 1000,
  },
});
