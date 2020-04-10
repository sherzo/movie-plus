import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import posterDefault from 'Assets/img/1.jpg';

export const New = ({id, poster}) => {
  return (
    <View key={id}>
      <Image source={posterDefault} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    width: 90,
    height: 90,
    borderWidth: 1.5,
    borderColor: 'red',
    marginRight: 10,
  },
});
