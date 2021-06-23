import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function Book({title, description}) {
    return (
        <View style={styles.coucou}>
            <Text style={styles.title}><AntDesign name="book" size={19} color="white" />{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    coucou: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 5,

    },
    title: {
        flexDirection: 'row',
        backgroundColor: 'red',
        margin: 0,
        color: 'white',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 19,
        width: '100%'
    },
    description: {
        color: '#000',
        paddingTop: 5,
        paddingHorizontal: 10,
        textAlign: 'justify', 
        paddingBottom: 10,
        alignSelf: 'stretch',
    }

});

