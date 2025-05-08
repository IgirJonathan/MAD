import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'gray', onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button(color)} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    margin: 5,
    padding: 20,
    borderRadius: 15,
  }),
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
