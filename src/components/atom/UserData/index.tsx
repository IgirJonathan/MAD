import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UserData = ({firstName, lastName, email, avatar}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{lastName}</Text> {firstName}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
});
