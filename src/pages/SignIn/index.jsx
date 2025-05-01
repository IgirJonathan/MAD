/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import TextInput from '../../Components/molecules/TextInput';
import Button from '../../Components/atoms/Button';
import Gap from '../../Components/atoms/Gap';
import { Logo } from '../../assets'; // Asumsikan Logo adalah gambar mesin cuci.

const SignIn = () => {
  return (
    <View style={styles.page}>

            <View style={styles.logoWrapper}>
        <Image source={Logo} width={210} height={190} />
      </View>
      {/* Teks SIGN IN */}
      <Text style={styles.header}>SIGN IN</Text>

      <View style={styles.form}>
        {/* Input Username */}
        <Text style={styles.label}>Username/email</Text>
        <TextInput 
          placeholder="Username/email"
          style={styles.input}
        />
        <Gap height={20} />

        {/* Input Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <Gap height={30} />

        {/* Tombol Login */}
        <Button 
          label="Login" 
          style={styles.buttonLogin}
          textStyle={styles.buttonLoginText}
        />
        <Gap height={15} />

        {/* Tombol Sign Up */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAF9FF', // Latar belakang biru muda
    alignItems: 'center',
  },

  logoWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3182CE',
    marginTop: -30,
  },
  form: {
    width: '100%',
    marginTop: 40,
  },
  
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3182CE',
    marginBottom: 6,
    marginLeft: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#4682B4',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  buttonLogin: {
    backgroundColor: '#87CEFA',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonLoginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: '#4682B4',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
    color: '#FFFFFF',
  },
  signUpButtonText: {
    color: '#3182CE',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignIn;
