import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Modal
} from 'react-native'
import React, { useState } from 'react'

const ModelExample = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => alert('Model has been closed.')}
                >
                    <View style={styles.modal}>
                        <Text style={styles.text}>Modal is open!</Text>
                        <Button
                            title='Click to Close Modal'
                            onPress={() => setShowModal(!showModal)}
                        />
                    </View>
                </Modal>
                <Button
                    title='Click to Open Model'
                    onPress={() => setShowModal(!showModal)}
                />
            </View>
        </SafeAreaView>
    )
}

export default ModelExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
    },
    text: {
        color: 'white',
        marginTop: 10,
        fontSize: 20,
        padding: 10
    },
}); 