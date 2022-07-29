import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ModalPractice = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.centeredView}>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => alert('Modal has been close')}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>คุณลืมปิดไฟในห้อง!!!</Text>

                            <TouchableOpacity
                                style={styles.buttonOpen}
                                onPress={() => setShowModal(!showModal)}
                            >
                                <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อปิดไฟ</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Text style={styles.modalText}>ไฟในห้องเปิดอยู่</Text>

                <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={() => setShowModal(!showModal)}
                >
                    <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default ModalPractice

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});