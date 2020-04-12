import React, {useState} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {
  colors,
  keyExtractor,
  isCloseToBottom,
  movies as moviesMock,
  sections as sectionsMock,
} from 'Utils';
import {Section, Poster, Layout, Header, Ad, New, Loading} from 'Components';

export const Home = () => {
  const [movies, setMovies] = useState(moviesMock);
  const [news, _] = useState(moviesMock);
  const [sections, setSections] = useState(sectionsMock);
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

  const itemSection = ({item}) => <Section {...item} />;

  const itemNew = ({item}) => <New {...item} />;

  const itemMovie = ({item}) => <Poster {...item} />;

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
          data={sections}
          renderItem={itemSection}
          keyExtractor={keyExtractor}
        />
        <FlatList
          ListHeaderComponent={Title}
          numColumns={3}
          data={movies}
          renderItem={itemMovie}
          keyExtractor={keyExtractor}
          ListFooterComponent={<Loading isLoading={isLoading} />}
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
