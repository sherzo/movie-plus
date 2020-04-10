import React, {useState} from 'react';
import {
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import {colors, isCloseToBottom} from 'Utils';
import {Categorie, Poster, Layout, Header, Ad, New} from 'Components';
import {
  movies as moviesMock,
  categories as categoriesMock,
} from '../Utils/mock';

export const Home = () => {
  const [movies, setMovies] = useState(moviesMock);
  const [news, setNews] = useState(moviesMock);
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

  const itemNew = ({item}) => <New {...item} />;

  const itemMovie = ({item}) => <Poster {...item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <Layout onScroll={onScroll}>
      <Header />
      <Ad />
      <View style={styles.body}>
        <View style={{paddingVertical: 5}}>
          <Text style={styles.title}>Lo mas nuevo</Text>
          <FlatList
            data={news}
            renderItem={itemNew}
            keyExtractor={keyExtractor}
            horizontal={true}
          />
        </View>

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
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    marginBottom: 10,
  },
  body: {
    padding: 10,
  },
});

export default Home;
