import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Untuk komponen peta

const PaymentScreen = () => {
  const [selectedPayment, setSelectedPayment] = React.useState('cash');
  const [notes, setNotes] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Splash Payment</Text>
        <Text style={styles.serviceType}>Wash And Fold</Text>
        <Text style={styles.weight}>Weight Clothes: 5 kg</Text>
      </View>

      {/* Map Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Location</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -6.2088,
              longitude: 106.8456,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: -6.2088, longitude: 106.8456 }}
              title="Your Location"
            />
          </MapView>
        </View>
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        
        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedPayment('debit')}
        >
          <View style={[styles.radio, selectedPayment === 'debit' && styles.radioSelected]}/>
          <Text style={styles.paymentText}>Debit/Credit</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.paymentOption} 
          onPress={() => setSelectedPayment('cash')}
        >
          <View style={[styles.radio, selectedPayment === 'cash' && styles.radioSelected]}/>
          <Text style={styles.paymentText}>Cash (Pay at House)</Text>
        </TouchableOpacity>
      </View>

      {/* Notes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add notes?</Text>
        <TextInput
          style={styles.notesInput}
          multiline
          numberOfLines={4}
          placeholder="Type your notes here..."
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Untuk install map:
// 1. npm install react-native-maps
// 2. Untuk Android: tambahkan API key di android/app/src/main/AndroidManifest.xml
// 3. Untuk iOS: tambahkan di AppDelegate.m

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 8,
  },
  serviceType: {
    fontSize: 18,
    color: '#333',
  },
  weight: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B5998',
    marginBottom: 12,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3B5998',
    marginRight: 12,
  },
  radioSelected: {
    backgroundColor: '#3B5998',
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    minHeight: 100,
  },
  confirmButton: {
    backgroundColor: '#3B5998',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginVertical: 24,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;