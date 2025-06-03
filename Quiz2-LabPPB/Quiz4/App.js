import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import FormPendaftaran from './FormPendaftaran';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <FormPendaftaran />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
