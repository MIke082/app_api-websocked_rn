import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AppNavigation from './components/appNavigation/AppNavigation';
import BottomNavigation from './components/appNavigation/BottomNavigation';
import reducers from './store/reducers';

const store = createStore(reducers, applyMiddleware(thunk))


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
        {/* <BottomNavigation/> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
