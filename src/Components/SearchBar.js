import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors} from 'Utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const SearchBar = ({styleContainer}) => {
  const search = () => console.log('Esto buscara las peliculas');

  return (
    <View style={{...styles.container, ...styleContainer}}>
      <TextInput
        placeholder="Buscar pelicula o serie..."
        style={styles.input}
        placeholderTextColor={colors.white}
      />
      <TouchableOpacity onPress={search} style={styles.button}>
        <Icon name="magnify" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.dark,
    paddingVertical: 4,
  },
  button: {
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    color: colors.white,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
