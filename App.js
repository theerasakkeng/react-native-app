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
  Text,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavBottom from './src/components/navigation-bar/bottom/NavBottom';

import Main from './src/screens/main/Main';

const Stack = createNativeStackNavigator();

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
        <NavigationContainer>
          {/* <ScrollView style={styles.container}> */}
            <Stack.Navigator initialRouteName="Main" >
              <Stack.Screen name="Main" component={Main} options={{
                title:"Main"
              }}/>
            </Stack.Navigator>
          {/* </ScrollView> */}
        </NavigationContainer>
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
    zIndex:-1
  },
});

export default App;
