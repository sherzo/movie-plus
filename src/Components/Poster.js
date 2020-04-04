import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import FastImage from 'react-native-fast-image';
import posterExample from 'Assets/img/1.jpg';

export const Poster = ({id, poster}) => {
  return (
    <TouchableOpacity onPress={() => console.log('hola')} key={id}>
      <View style={styles.container}>
        <Image
          source={posterExample}
          fadeDuration={1000}
          style={styles.poster}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginRight: 10,
  },
  poster: {
    flex: 1,
  },
});
