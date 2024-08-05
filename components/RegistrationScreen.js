import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import Block from '../components/Block';
import Banner from '../components/Banner';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { Provider as PaperProvider } from 'react-native-paper';
import { CustomTheme } from '../components/Theme';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleRegister = () => {
    // Handle registration logic
  };

  return (
    <PaperProvider theme={CustomTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Block title="Thông tin cá nhân">
          <TextInput
            label="Tên"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            label="Số điện thoại"
            value={phone}
            onChangeText={setPhone}
          />
        </Block>
        <Block title="Thông tin khóa học">
          <TextInput
            label="Khóa học"
            value={course}
            onChangeText={setCourse}
          />
        </Block>
        <Block title="Thông tin liên hệ">
          <TextInput
            label="Thông tin liên hệ"
            value={contactInfo}
            onChangeText={setContactInfo}
          />
        </Block>
        <Button title="Đăng ký" onPress={handleRegister} />
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 200,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default RegistrationScreen;
