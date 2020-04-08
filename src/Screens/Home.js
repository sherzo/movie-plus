import React, {useState} from 'react';
import {StyleSheet, FlatList, Text, ActivityIndicator} from 'react-native';
import {colors, isCloseToBottom} from 'Utils';
import {Categorie, Poster, Layout} from 'Components';
import {
  movies as moviesMock,
  categories as categoriesMock,
} from '../Utils/mock';

export const Home = () => {
  const [movies, setMovies] = useState(moviesMock);
  const [categories, _] = useState(categoriesMock);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomMovies = (length) =>
    moviesMock.map((movie, index) => ({
      ...movie,
      id: length + index,
    }));

  const onScroll = ({nativeEvent}) => {
    if (isCloseToBottom(nativeEvent)) {
      setIsLoading(true);
      setTimeout(() => {
        setMovies([...movies, ...generateRandomMovies(movies.length)]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const Title = <Text style={styles.title}>Todas las películas</Text>;

  const Loading = (
    <ActivityIndicator color={colors.white} animating={isLoading} />
  );

  const itemCategorie = ({item}) => <Categorie {...item} />;

  const itemMovie = ({item}) => <Poster {...item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <Layout onScroll={onScroll} style={styles.layout}>
      <FlatList
        data={categories}
        renderItem={itemCategorie}
        keyExtractor={keyExtractor}
      />
      <FlatList
        ListHeaderComponent={Title}
        numColumns={3}
        data={movies}
        renderItem={itemMovie}
        keyExtractor={keyExtractor}
        ListFooterComponent={Loading}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 10,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
