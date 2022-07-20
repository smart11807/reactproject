import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const ImageWithTextInput = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
            <View style={styles.sectionStyle}>
                    <Image
                        source={require('../assets/input_username.png')}
                        style={styles.imageStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='Enter Your Name Here'
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../assets/input_phone.png')}
                        style={styles.imageStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder='Enter Your Phone Here'
                    />
                </View>
            </View>
        </View>
    )
}

export default ImageWithTextInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        width : '80%',
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
})