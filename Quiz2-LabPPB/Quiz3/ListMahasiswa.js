// ListMahasiswa.js
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', nama: 'Hery Tua SIgalingging', npm: '232310030' },
    { id: '2', nama: 'Helena Jemima Widjaja', npm: '232310042' },
    { id: '3', nama: 'Lukman David', npm: '232310032' },
    { id: '4', nama: 'Adi Saputra', npm: '232310011' },
    { id: '5', nama: 'Dani Fahdlu Rohman Silaen', npm: '232310027' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.npm}>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>List Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default ListMahasiswa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6fa',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  nama: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },
  npm: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
