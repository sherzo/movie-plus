import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Layout, Poster, Loading} from 'Components';
import {movies as moviesMock} from 'Utils';

const Categorie = () => {
  const [movies, setMovie] = useState(moviesMock);
  const [isLoading, setIsLoading] = useState(false);

  const itemMovie = ({item}) => <Poster {...item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <Layout style={styles.container}>
      <FlatList
        numColumns={3}
        data={movies}
        renderItem={itemMovie}
        keyExtractor={keyExtractor}
        ListFooterComponent={<Loading isLoading={isLoading} />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Categorie;
