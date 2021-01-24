import React from "react";
import { View, StyleSheet } from "react-native";



const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
}


export default Row


const styles = StyleSheet.create({

row: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  alignSelf: "stretch"
},


})