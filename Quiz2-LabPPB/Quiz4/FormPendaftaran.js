// FormPendaftaran.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');

  const handleSubmit = () => {
    if (!nama || !email || !hp) {
      const pesan = 'Harap isi semua field!';
      if (Platform.OS === 'web') {
        alert(pesan);
      } else {
        Alert.alert('Peringatan', pesan);
      }
      return;
    }

    const ringkasan = `Nama: ${nama}\nEmail: ${email}\nNo. HP: ${hp}`;
    if (Platform.OS === 'web') {
      alert(ringkasan);
    } else {
      Alert.alert('Data Terkirim', ringkasan);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form Pendaftaran</Text>

      <TextInput
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Nomor HP"
        value={hp}
        onChangeText={setHp}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FormPendaftaran;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eef6fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
