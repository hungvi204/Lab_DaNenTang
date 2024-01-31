import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import Input from "../../components/input";
import Button from "../../components/button";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'

function HomeScreen({ navigation }) {
    const [name, setName] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chào bạn, đây là màn hình chính</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên"
                onChangeText={setName}
                value={name}
            />
            <Button
                onPress={() => navigation.navigate('Article', { name: name })}
                title='ĐI TỚI MÀN HÌNH CHI TIẾT'
            />
        </View>
    );
}

function NotificationsScreen({ navigation, route }) {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chào bạn, {name}</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.goBack()} title='Go back' />
                <Button onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })} title="Reset" />
                <Button onPress={() => navigation.pop()} title="Pop" />
                <Button onPress={() => navigation.popToTop()} title="Pop to top" />
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ alignItems: 'center', padding: 20 }}>
                {/* User Info Section */}
                <Image
                    source={require('../../assets/images/man.png')} // Replace with your profile image path
                    style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nguyen Van A</Text>
                <Text style={{ color: 'gray' }}>vana@gmail.com</Text>
            </View>
            <DrawerItemList {...props} />
            {/* ... add more custom items if needed */}
        </DrawerContentScrollView>
    );
}

const HomeLab6 = () => {
    return (
        // <View style={styles.container}>
        //     <Text style={styles.text}>Chào bạn, đây là màn hình chính</Text>
        //     <Input></Input>
        //     <Button title='Đi tới màn hình chi tiết' />
        // </View>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawerContent {...props}/>}>
                <Drawer.Screen name='Home' component={HomeScreen} options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Icon name='home' size={size} color={color} />
                    ),
                }} />
                <Drawer.Screen name='Article' component={NotificationsScreen} options={{
                    drawerLabel: 'Article',
                    drawerIcon: ({ color, size }) => (
                        <Icon name='caretleft' size={size} color={color} />
                    ),
                }} />
                <Drawer.Screen name='Chat' component={HomeScreen} options={{
                    drawerLabel: 'Chat',
                    drawerIcon: ({ color, size }) => (
                        <Icon name='wechat' size={size} color={color} />
                    ),
                }} />
                <Drawer.Screen name='Setting' component={HomeScreen} options={{
                    drawerLabel: 'Setting',
                    drawerIcon: ({ color, size }) => (
                        <Icon name='settings' size={size} color={color} />
                    ),
                }} />
                <Drawer.Screen name='Help' component={HomeScreen} options={{
                    drawerLabel: 'Help',
                    drawerIcon: ({ color, size }) => (
                        <Icon name='help' size={size} color={color} />
                    ),
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    text: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#B9B5B5',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
})

export default HomeLab6;