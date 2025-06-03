import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profilepic.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Nama: Hery Tua Sigalingging</Text>
      <Text style={styles.email}>Email: 232310030@student.ibik.ac.id</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#1e90ff',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});
