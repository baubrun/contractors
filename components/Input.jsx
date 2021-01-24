import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View >
      <Text>{props.label}</Text>
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,  
    // height: 20,
    fontSize: 20,
    margin: 10,
    padding: 10
  },
});
