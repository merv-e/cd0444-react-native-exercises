import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Row from './row'

const List = () => {
    const { navigate } = useNavigation()

    return (
        <View>
            <Text>My Library</Text>

            {(books && books.length > 0) ? (
                <FlatList
                    data={books || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No books yet!'}</Text>
                    <Button title={'Add Book'} onPress={() => {
                        navigate('New')
                    }} />
                </>
            )}
        </View>
    )
}

export default List
