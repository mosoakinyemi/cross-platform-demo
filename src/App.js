import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigator from './dashboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
