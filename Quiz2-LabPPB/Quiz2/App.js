import React from 'react';
import { View } from 'react-native';
import CounterApp from './CounterApp';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CounterApp />
    </View>
  );
}
