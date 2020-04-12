import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Layout, Poster, Loading} from 'Components';
import {movies as seriesMock, keyExtractor} from 'Utils';

export const Series = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [series, setSeries] = useState(seriesMock);

  const itemSerie = ({item}) => <Poster {...item} isSerie={true} />;

  return (
    <Layout style={styles.container}>
      <FlatList
        numColumns={3}
        data={series}
        renderItem={itemSerie}
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

export default Series;
