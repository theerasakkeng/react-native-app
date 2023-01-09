import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const NavBottom = () => {
  return (
    <View style={styles.navBottomWrap}>
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
    height: 70,
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
    marginTop: -7,
    padding:20
  },
});

export default NavBottom;
