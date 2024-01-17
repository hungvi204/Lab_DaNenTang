import React from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import { styles } from './styles' // Đảm bảo rằng đường dẫn đúng đến file styles.js

const Modal = ({ isVisible, onHide }) => { // Thêm prop placeholder và rest để chấp nhận các props khác

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onHide}
        >
            <View style={styles.modalView}>
                <Text>Hello World!</Text>
                <Button title="Ẩn Modal" onPress={onHide} />
            </View>
        </Modal>
    );
};

export default Modal;
