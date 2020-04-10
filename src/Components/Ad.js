import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import ad from 'Assets/img/ad.jpg';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 100;

export const Ad = () => {
  return (
    <View style={styles.container}>
      <Image source={ad} style={styles.ad} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  ad: {
    width,
    height: 70,
    resizeMode: 'contain',
  },
});
