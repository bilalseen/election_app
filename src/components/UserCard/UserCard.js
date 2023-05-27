import React from "react"
import { Text, View, Button, Image, TouchableOpacity } from 'react-native'
import styles from "./UserCard.style"

export default function UserCard(props) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} />
            <View style={styles.inner_container}>
                <View style= {styles.box_container}>
                <TouchableOpacity style={styles.increaseButton} onPress={props.increase}>
                    <Text style={{fontSize: 20}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.decreaseButton} onPress={props.decrease}>
                    <Text style={{fontSize: 20}}>-</Text>
                </TouchableOpacity>
                </View>
                <Text style={styles.count}>{props.count}</Text>
            </View>
        </View>
    )
}