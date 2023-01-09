/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import NavBottom from './src/components/navigation-bar/bottom/NavBottom';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#BA69EF" />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <ScrollView style={styles.container}></ScrollView>
        <NavBottom />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
