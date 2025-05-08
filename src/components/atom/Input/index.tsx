import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.subTitle}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default input;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    textAlign: 'left',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    padding: 25,
    fontSize: 25,
    borderRadius: 15,
  },
});
