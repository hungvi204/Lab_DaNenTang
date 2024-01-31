import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Bai2 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/Espresso.png')}
            >
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}>Discover{'\n'}</Text>
                        <Text style={styles.secondLine}>world with us</Text>
                    </Text>
                    <Text style={styles.textStyles}>Lorem world with us</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    details: {
        marginLeft: 50
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 20
    },
    firstLine: {
        color: 'white',
        fontSize: 50,
    },
    secondLine: {
        color: 'white',
        fontSize: 50,
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },

    textStyles: {
        color: 'white',
        fontSize: 16,
        paddingBottom: 50
    }
})

export default Bai2;