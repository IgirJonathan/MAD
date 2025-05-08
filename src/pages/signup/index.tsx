import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import Input from '../../..//src/components/atom/Input';
import Button from '../../../src/components/atom/Button';

const SignUp = ({navigation}) => {
  const [title, setTitle] = useState('Welcome!!!');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);

  const onSubmit = () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Semua field wajib diisi');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    setTitle(`Selamat Datang, ${username}!`);
    Alert.alert('Success', 'Sign up berhasil!');

    setUsername('');
    setEmail('');
    setPassword('');

    navigation.navigate('SignIn');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Input
        label="Username"
        placeholder="Masukkan username anda"
        onChangeText={setUsername}
        value={username}
      />
      <Input
        label="Email"
        placeholder="Masukkan email anda"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        label="Password"
        placeholder="Masukkan password anda"
        onChangeText={setPassword}
        secureTextEntry
        value={password}
      />
      <Button label="Sign Up" onPress={onSubmit} />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
});
