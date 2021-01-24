import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    height: 20,
    fontSize: 11,
    // borderColor: "#64ffda"
  },
  container: {
    alignItems: "center",
    // backgroundColor: "#1c2c91",
    // flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
    // padding: 10,
    // paddingTop: 20,

  },
});
