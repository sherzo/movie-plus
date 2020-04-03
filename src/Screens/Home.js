import React from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import {colors} from 'Utils';
import {Categorie} from 'Components';

const Home = () => {
  const movies = [
    {id: '1', poster: '1.jpg'},
    {id: '2', poster: '2.jpg'},
    {id: '3', poster: '3.jpg'},
    {id: '4', poster: '4.jpg'},
    {id: '5', poster: '4.jpg'},
    {id: '6', poster: '4.jpg'},
    {id: '7', poster: '4.jpg'},
    {id: '8', poster: '4.jpg'},
    {id: '9', poster: '4.jpg'},
    {id: '10', poster: '4.jpg'},
    {id: '11', poster: '4.jpg'},
    {id: '12', poster: '4.jpg'},
    {id: '13', poster: '4.jpg'},
  ];

  const categories = [
    {id: '1', title: 'Peliculas estrenos', movies},
    {id: '2', title: 'Recomendadas', movies},
    {id: '3', title: 'Dragon ball - peliculas', movies},
  ];

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <FlatList
          data={categories}
          renderItem={({item}) => <Categorie {...item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.dark,
  },
  body: {
    backgroundColor: colors.dark,
    padding: 10,
  },
  CategoriesText: {
    color: colors.white,
  },
});

export default Home;
