import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './components/appNavigation/AppNavigation';



export default function App() {
  return (
      <View style={styles.container}>
        <AppNavigation />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
