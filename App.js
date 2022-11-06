import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store'
import { Provider, useSelector } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>sadegh</Text>
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
