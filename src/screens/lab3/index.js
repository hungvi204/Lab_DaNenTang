import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button, Alert, BackHandler,Image } from 'react-native';
import { styles } from './styles';
import Input from "../../components/input"; // Assuming correct path to Input component

// Định nghĩa hàm colorText
const colorText = (color) => {
  return { color: color };
};
// Định nghĩa hàm sizeText
const sizeText = (fontSize) => {
  return { fontSize: fontSize };
};

const Lab3 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassWord] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);

  const handleBackButtonPress = () => {
    Alert.alert("Thông báo", "Bạn đã tắt modal bằng nút back của thiết bị", [
      {
        text: "OK",
        onPress: () => setModalVisible(false)
      }
    ]);
    return true; // This prevents the default back button behavior
  };

  useEffect(() => {
    // Add the hardware back press event listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress
    );

    return () => {
      // Remove the event listener when the component is unmounted
      backHandler.remove();
    };
  }, []);


  return (
    <View>
      {/* Use the Input component */}
      <Input value={name} onChangeText={setName} placeholder="Nhập họ và tên" />
      <Input value={phone} onChangeText={setPhone} placeholder="Nhập số điện thoại" keyboardType="phone-pad" />
      <Input value={password} onChangeText={setPassWord} placeholder="Nhập mật khẩu" secureTextEntry={true} />

      <View style={styles.container}>
        {/* Line 1 */}
        <Text style={styles.baseText}>
          Em vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('red')]}>vang đỏ</Text> anh vào đời bằng {' '}
          <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
        </Text>
        {/* Line 2 */}
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.boldText, sizeText(20)]}>Mùi đất</Text>
          {' '} và {' '}
          <Text style={[styles.italicText, sizeText(10)]}>bằng hoa dại mọc trước nhà</Text>
        </Text>
        {/* Line 3 */}
        <Text style={[
          styles.baseText,
          styles.italicText,
          styles.boldText,
          colorText('gray')
        ]}>
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>
        {/* Line 4 */}
        <Text style={[styles.baseText]}>
          Lý trí em lạ{' '}
          <Text
            style={[{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }]}>
            {' '}công cụ{' '}
          </Text>
          còn trái tim anh là
          <Text
            style={[{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }]}>
            {' '}đồng cỏ{' '}
          </Text>
        </Text>
        {/*Line 5 */}
        <Text style={[styles.baseText, { textAlign: 'right' }]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều tình
        </Text>
        {/* Line 6 */}
        <Text
          style={[styles.baseText, { textAlign: 'center', fontWeight: 'bold', color: 'orange' }]}>
          Anh chịu muốn chân mình dập đất không muốn dập ai dưới chân mình
        </Text>
        {/* // Line 7 */}
        <Text
          style={[styles.baseText, { fontWeight: 'bold', color: 'black' }]}>
          Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text> em vào đời bằng <Text style={colorText('yellow')}>nắng xanh</Text>
        </Text>

        {/* // Line 8 */}
        <Text
          style={[styles.baseText, { fontWeight: 'bold', color: 'black' }]}>
          Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text> và con đường đó giờ <Text style={colorText('white')}>vàng anh</Text>
        </Text>

      </View>
      {/* view modal */}
      <View style={styles.viewBtn}>
        <Button title="Mở modal" onPress={() => setModalVisible(true)} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={handleBackButtonPress}
        >
          <View style={styles.viewModal}>
            <Text>Hello World!</Text>
            <Image
              style={styles.image}
              source={require('../../assets/react_native.png')}
            />
            <Button title="Ẩn Modal" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Lab3;
