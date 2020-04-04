import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {colors} from 'Utils';
import {Poster} from './Poster';

export const Categorie = ({title, movies}) => {
  const windowWidth = Dimensions.get('window').width;
  const width = windowWidth / 4;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <ScrollView horizontal={true}>
        <View style={styles.carousel}>
          {movies.map((movie) => (
            <Poster {...movie} width={width} key={movie.id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carousel: {
    flexDirection: 'row',
  },
});
