import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import posterExample from 'Assets/img/3.jpg';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export const Poster = ({id, poster, width}) => {
  const navigation = useNavigation();
  const margin = 10;
  const widthDefault = windowWidth / 3 - margin; // Por defecto 3 peliculas por pantalla
  const widthPoster = width || widthDefault;
  const heightPoster = widthPoster + widthPoster * 0.5;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Movie')} key={id}>
      <Image
        fadeDuration={1000}
        source={posterExample}
        style={{
          resizeMode: 'cover',
          width: widthPoster,
          height: heightPoster,
          marginRight: margin,
          marginBottom: margin,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
