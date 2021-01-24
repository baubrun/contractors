import React from "react";
import { View, StyleSheet } from "react-native";



const Column = ({ children }) => {
  return <View style={styles.column}>{children}</View>;
}


export default Column



const styles = StyleSheet.create({


  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch"
  }
  
  
  })


