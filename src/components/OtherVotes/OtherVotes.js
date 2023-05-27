import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./OtherVotes.style";

export default function OtherVotes(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.text}</Text>
      <View style={styles.box_container}>
        <TouchableOpacity
          style={styles.increaseButton}
          onPress={props.increase}
        >
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.decreaseButton}
          onPress={props.decrease}
        >
          <Text style={{ fontSize: 20 }}>-</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.count}>{props.count}</Text>
    </View>
  );
}
