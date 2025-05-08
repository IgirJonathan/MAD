import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../../src/components/atom/Input';
import Button from '../../../src/components/atom/Button';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password wajib diisi');
      return;
    }

    Alert.alert('Success', 'Login berhasil!');
    console.log('Email:', email);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <Button label="Sign In" onPress={onSubmit} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Belum punya akun? Buat akun</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignIn;

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
  link: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
    fontSize: 16,
  },
});
