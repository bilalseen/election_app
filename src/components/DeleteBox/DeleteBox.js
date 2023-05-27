import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./DeleteBox.style";

export default function DeleteBox(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={props.onPress}>
        <Text style={styles.text}>SİL</Text>
      </TouchableOpacity>
    </View>
  );
}
