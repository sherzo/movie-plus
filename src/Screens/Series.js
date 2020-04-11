import React, {useState} from 'react';
import {Layout, Poster, StyleSheet} from 'Components';
import {movies as seriesMock} from 'Utils';

export const Series = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [series, setSeries] = useState(seriesMock);
  return (
    <Layout style={styles.container}>
      <FlatList
        numColumns={3}
        data={series}
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

export default Series;
