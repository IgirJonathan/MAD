import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Gap from '../../Components/atoms/Gap';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    console.log({ username, email, password });
    // TODO: navigasi atau validasi
  };

  return (
    <View style={styles.pageContainer}>
      {/* Icon + Title */}
      <Image
        source={require('../../assets/Frame34.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>SIGN UP</Text>

      {/* Spacing sebelum form */}
      <Gap height={36} />

      {/* Form */}
      <View style={styles.form}>
        {/* Username */}
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Type your username"
          placeholderTextColor="#94a3b8"
          style={styles.input}
        />

        <Gap height={24} />

        {/* Email */}
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Type your email address"
          placeholderTextColor="#94a3b8"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Gap height={24} />

        {/* Password */}
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Type your password"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Spacing sebelum button */}
      <Gap height={40} />

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        activeOpacity={0.8}
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  icon: {
    width: 80,
    height: 80,
    tintColor: '#0369a1',
  },
  title: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0369a1',
  },
  form: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    color: '#0369a1',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0369a1',
    borderRadius: 22.5,
    paddingHorizontal: 12,
  },
  continueButton: {
    width: 150,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
