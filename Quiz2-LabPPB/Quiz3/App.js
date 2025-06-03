import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ListMahasiswa from './ListMahasiswa';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ListMahasiswa />
    </SafeAreaView>
  );
};

export default App;
