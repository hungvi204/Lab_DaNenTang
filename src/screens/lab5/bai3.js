import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { PlayfairDisplay } from '../../assets/fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const Bai3 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://gtttravel.vn/wp-content/uploads/2023/02/Hinh-anh-Hoi-An-soi-dong.jpg' }}
                    style={styles.headerImage}
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.tripInfo}><Icon name="location-outline" size={30} color='blue' /> Quảng Nam</Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Thông Tin Chuyến Đi</Text>
                <Text style={styles.tripTitle} numberOfLines={6} ellipsizeMode="tail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>$100/ngày</Text>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.buttonText}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.heartIconContainer}>
                <View style={styles.heartCircle}>
                    <TouchableOpacity>
                        <Icon name="heart" size={30} color='red' />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ ...styles.headerIcon, top: '8%' }}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={25} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="ellipsis-vertical" size={25} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.headerIcon, top: '51%' }}>
                <Text style={styles.content}>PHỐ CỔ HỘI AN</Text>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}><Icon name="star" size={20} color='yellow' /> 5.0</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    header: {
        flex: 7,
    },
    headerImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    tripTitle: {
        overflow: 'hidden',
        fontSize: 17,
        paddingTop: 20,
        fontWeight: '400',
        fontFamily: 'Roboto-Thin'
    },
    headerIcon: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tripInfo: {
        color: 'blue',
        fontSize: 25,
        paddingTop: 15,
        fontWeight: '500',
        paddingBottom: 15
    },
    content: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto-ThinItalic',
        color: 'white'
    },
    body: {
        flex: 3,
        paddingHorizontal: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        position: 'absolute',
        top: '60%',
        width: '100%',
        height: '100%',
    },
    footer: {
        height: 60,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'blue',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    bookButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },
    heartIconContainer: {
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: [{ translateX: 35 }, { translateY: 50 }],
    },
    heartCircle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2, // Đối với Android, sử dụng thuộc tính elevation
    },
});



export default Bai3;