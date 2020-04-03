import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {colors} from 'Utils';
import {Poster} from './Poster';

export const Categorie = ({title, movies}) => {
  console.log('movies', movies);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true}>
        <View style={styles.carousel}>{movies.map(Poster)}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
  },
  carousel: {
    flexDirection: 'row',
  },
});
