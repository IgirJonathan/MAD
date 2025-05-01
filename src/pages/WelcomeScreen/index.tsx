// src/pages/WelcomeScreen/index.js

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import BottomNav from '../../Components/molecules/BottomNav';

// Suppress development warning
if (__DEV__) {
  LogBox.ignoreLogs(['property is not configurable']);
}

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME</Text>

      <View style={styles.cardGrid}>
        {/* Baris Atas: 2 Kartu */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../assets/WashClothes.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wash And Fold</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../assets/drywashhh.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Dry Wash</Text>
          </TouchableOpacity>
        </View>

        {/* Baris Tengah: 1 Kartu */}
        <TouchableOpacity style={[styles.card, styles.centerCard]}>
          <Image
            source={require('../../assets/dryCleanMaybe.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Wash Delicate{'\n'}and Dry</Text>
        </TouchableOpacity>
      </View>

      <BottomNav />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FB',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 100,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 32,
  },
  cardGrid: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 16,
  },
  centerCard: {
    alignSelf: 'center',
  },
  card: {
    width: 140,
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ccc',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 2,
  },
  cardImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 4,
    width: '100%',
  },
});
