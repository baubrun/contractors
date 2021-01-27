import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Button, Text, List, ListItem } from "native-base";

import { jobState } from "../redux/jobSlice";

const ConfirmJob = (props) => {
  const dispatch = useDispatch();
  const { job } = useSelector(jobState);

  return (
    <>
      <List>
        <ListItem>
          <Text> {JSON.stringify(job)}</Text>
        </ListItem>
      </List>
      <Button full onPress={() => props.handleSubmit()}>
        <Text>SUBMIT JOB</Text>
      </Button>
    </>
  );
};

export default ConfirmJob;
