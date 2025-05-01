import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import { Logo } from '../../assets';

const SplashScreen = ( ) => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};


export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF', // Light blue background like in the image
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: 140,
    height: 140,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#5DA7DB', // Blue color matching the logo
    marginTop: 10,
    letterSpacing: 1,
  },
});