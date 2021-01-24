import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.textInputContainer}>
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
  textInputContainer: {
    alignSelf: "stretch",
  },
});
