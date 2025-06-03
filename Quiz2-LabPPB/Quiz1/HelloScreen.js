import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, Platform } from 'react-native';

const HelloScreen = () => {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      alert('Tombol berhasil ditekan!');
    } else {
      Alert.alert('Tombol berhasil ditekan!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Halo, Selamat Datang di Kuis React Native!</Text>
      <Image
        source={{ uri: 'https://images.prismic.io//intuzwebsite/4c33b834-958d-4492-934f-1c8cd840d800_React+Native.jpg?w=1200&q=75&auto=format,compress&fm=png8' }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Klik Saya" color="#007BFF" onPress={handlePress} />
      </View>
    </View>
  );
};

export default HelloScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
});