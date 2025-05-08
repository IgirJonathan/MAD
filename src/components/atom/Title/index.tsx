import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({label}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
  },
});
