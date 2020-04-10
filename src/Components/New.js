import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import posterDefault from 'Assets/img/1.jpg';
import {useNavigation} from '@react-navigation/native';

export const New = ({id, poster}) => {
  const navigation = useNavigation();
  const toMovie = () => navigation.navigate('Movie');

  return (
    <TouchableOpacity onPress={toMovie}>
      <View key={id}>
        <Image source={posterDefault} style={styles.image} />
      </View>
    </TouchableOpacity>
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
