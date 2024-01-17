import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold'
    },
    italicText: {
        fontStyle: 'italic'
    },
    viewBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewModal: {
        marginTop: 300,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        margin: 20,
        backgroundColor: 'red'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: 200,
        height: 200,
        borderRadius: 10, 
    }
})