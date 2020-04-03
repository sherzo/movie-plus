import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import posterExample from 'Assets/img/1.jpg';

export const Poster = ({id, poster}) => {
  return (
    <View style={styles.container} key={id}>
      <Image source={posterExample} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingRight: 10,
  },
});
