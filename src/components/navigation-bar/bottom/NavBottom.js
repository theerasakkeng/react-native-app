import React from 'react';
import {View, StyleSheet, Text, Image, Pressable, Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NavBottom = ({}) => {
  const count = 0;
  return (
    <View style={styles.navBottomWrap}>
      <View style={styles.navBottomItem}>
        <Pressable
          style={styles.navBottomItem}
          onPress={() => {
            Alert.alert('Right button pressed');
          }}>
          <Image
            source={require('../../../assets/image/icon/home.png')}
            style={styles.imageIcon}
          />
          <Text>กด</Text>
        </Pressable>
      </View>
      <View style={styles.navBottomItem}>
        <Image
          source={require('../../../assets/image/icon/home.png')}
          style={styles.imageIcon}
        />
        <Text>กด</Text>
      </View>
      <View style={styles.navBottomItem}>
        <View style={styles.iconCenterWrap}>
          <Image
            source={require('../../../assets/image/icon/home.png')}
            style={styles.imageIconCenter}
          />
          <View style={styles.backgroundIconCenter}></View>
        </View>
        <Text style={{marginTop: 1}}>กด</Text>
      </View>
      <View style={styles.navBottomItem}>
        <Image
          source={require('../../../assets/image/icon/home.png')}
          style={styles.imageIcon}
        />
        <Text>กด</Text>
      </View>
      <View style={styles.navBottomItem}>
        <Image
          source={require('../../../assets/image/icon/home.png')}
          style={styles.imageIcon}
        />
        <Text>กด</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBottomWrap: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#ffffff',
  },
  navBottomItem: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageIcon: {
    width: 30,
    height: 30,
    marginTop: 7,
  },
  imageIconCenter: {
    width: 40,
    height: 40,
    marginTop: -5,
  },
  iconCenterWrap: {
    position: 'relative',
    width: '100%',
  },
  backgroundIconCenter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: -15,
    left: -13,
    backgroundColor: '#ffffff',
    zIndex: -1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 34,
    paddingTop: 16,
  },
});

export default NavBottom;
