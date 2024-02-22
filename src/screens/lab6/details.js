import React from "react";
import { StyleSheet, Text, TextInput, View, } from "react-native";
import Input from "../../components/input";
import Button from "../../components/button";

const Detailis = () => {
    const DetailisScreen: FC<
        NativeStackScreenProps<RootStackParamList, 'Details'>
    > = ({ route, navigation }) => {
        const { id, name } = route.params;
        return (
            
        )
    }
}

export default Detailis