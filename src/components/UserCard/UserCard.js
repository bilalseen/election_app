import React from "react"
import { Text, View, Button, Image, TouchableOpacity } from 'react-native'

export default function UserCard(props) {
    return(
        <View>
            <Image style={styles.image} source={props.image} />
            <View>
                <View>
                <TouchableOpacity style={styles.increaseButton} onPress={props.increase}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.decreaseButton} onPress={props.decrease}>
                    <Text>+</Text>
                </TouchableOpacity>
                </View>
                <Text>{props.number}</Text>
            </View>
        </View>
    )
}