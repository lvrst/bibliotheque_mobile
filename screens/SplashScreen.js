import React from 'react'
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native'

export default function SplashScreen({navigation}) {
    function getStarted() {
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'My books',
                }
            ]
        })
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.img}
            source={require('../assets/img/reading.jpeg')} />
            <TouchableOpacity raised 
            style={styles.button}
            onPress={() => getStarted()}>
                <Text>Get Started</Text>
            </TouchableOpacity>
            {/* <Button color="red" title="Get Started" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },
    button: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 40,
        margin: 20,
        borderRadius: 10
    },
    img: {
        width: 100,
        height: 100,
        margin: 'auto'
    }
})