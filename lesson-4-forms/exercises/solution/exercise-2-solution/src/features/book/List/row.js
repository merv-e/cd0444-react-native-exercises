import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Row = ({ item }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text key={'id'}>ID: {item.id}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row