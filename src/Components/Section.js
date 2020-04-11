import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Poster} from './Poster';
import {Text} from './Text';

export const Section = ({title, movies}) => {
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
    marginLeft: 5,
  },
  title: {
    marginBottom: 10,
  },
  carousel: {
    flexDirection: 'row',
  },
});
