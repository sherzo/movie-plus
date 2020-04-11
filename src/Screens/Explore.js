import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'Components';
import {colors, categories as categoriesMock} from 'Utils';
import {useNavigation} from '@react-navigation/native';

export const Explore = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState(categoriesMock);
  const goToCategoria = (categorie) => () =>
    navigation.navigate('Categorie', {categorie});

  const itemCategorie = ({item}) => {
    return (
      <TouchableOpacity onPress={goToCategoria(item)}>
        <View style={styles.categorieContainer}>
          <Text style={styles.categorieName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={itemCategorie}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  categorieContainer: {
    paddingVertical: 10,
  },
  categorieName: {
    fontSize: 18,
    textAlign: 'center',
  },
  containerSerachBar: {
    marginBottom: 10,
  },
});

export default Explore;
