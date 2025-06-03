// CounterApp.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';

const CounterApp = () => {
  const [angka, setAngka] = useState(0);

  const tambah = () => {
    if (angka >= 10) {
      if (Platform.OS === 'web') {
        alert('Nilai maksimal tercapai.');
      } else {
        Alert.alert('Peringatan', 'Nilai maksimal tercapai.');
      }
      return;
    }
    setAngka(angka + 1);
  };

  const kurang = () => {
    if (angka > 0) {
      setAngka(angka - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{angka}</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={kurang}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={tambah}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {angka > 10 && (
        <Text style={styles.warning}>Nilai maksimal tercapai.</Text>
      )}
    </View>
  );
};

export default CounterApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  warning: {
    marginTop: 20,
    color: '#d9534f',
    fontSize: 16,
    fontWeight: '500',
  },
});
