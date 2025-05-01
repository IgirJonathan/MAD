import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet  } from 'react-native'
import { book, Home, user } from '../../../assets';

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Image 
            source={Home} 
            style={styles.icon}
            resizeMode="contain"
        />
        <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
        <Image 
            source={book} 
            style={styles.icon}
            resizeMode="contain"
        />
        <Text style={styles.navText}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
        <Image 
            source={user} 
            style={styles.icon}
            resizeMode="contain"
        />
        <Text style={styles.navText}>User</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: '#3B5998',
    marginTop: 4,
  },
});


export default BottomNav;