import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { styles } from './styles' // Đảm bảo rằng đường dẫn đúng đến file styles.js

const Input = ({placeholder, ...rest}) => { // Thêm prop placeholder và rest để chấp nhận các props khác
  
  return (
    <SafeAreaView>
      <TextInput
        style={styles.tipStyle}
        placeholder={placeholder} // Đặt prop placeholder
        {...rest} // Chuyển tất cả các props khác vào TextInput
      />
    </SafeAreaView>
  );
};

export default Input;
