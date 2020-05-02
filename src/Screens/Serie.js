import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Text, Layout, Button} from 'Components';
import detail from 'Assets/img/headerImage.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, keyExtractor, movies, seasons as seasonMock} from 'Utils';
import RNPickerSelect from 'react-native-picker-select';

const heightWindow = Dimensions.get('window').height;
const headerHeight = heightWindow / 4;

const Serie = () => {
  const [season, setTemp] = useState(1);
  const [seasons, setTemps] = useState(seasonMock);
  const onChangeValue = (value) => {
    setTemp(value);
  };

  const itemCapitule = ({item}) => (
    <View style={{flexDirection: 'row', marginBottom: 30}}>
      <Image
        source={detail}
        style={{width: 100, height: 'auto', resizeMode: 'cover'}}
      />
      <View>
        <Text>Ver capitulo 1 de react native {item.id}</Text>
        <TouchableOpacity>
          <View>
            <Icon
              name="download"
              color="white"
              size={30}
              style={{marginLeft: 15}}
            />
            <Text>Descargar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <Layout>
      <View style={{...styles.header, height: headerHeight}}>
        <Image source={detail} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>La casa de papel (HD)</Text>
        <View style={styles.row}>
          <Text style={styles.duration}>
            <Text style={styles.labelBig}>Año:</Text>
            <Text style={styles.textGray}> 2019</Text>
            <Text style={styles.labelBig}> Temporadas:</Text>
            <Text style={styles.textGray}> 3.</Text>
          </Text>
          <Button title="Reportar un error" color="red" icon="alert-circle" />
        </View>
        <Text style={styles.sipnosis}>
          Han pasado 30 años desde los acontecimientos ocurridos en Blade Runner
          (1982). El agente K (Ryan Gosling), un 'blade runner' caza-Replicantes
          del Departamento de Policía de Los Ángeles, descubre un secreto.
        </Text>
        <Text>
          <Text style={styles.label}>Actores:</Text>
          <Text style={styles.onlyTextGray}>
            {' '}
            Ali wong, Andy Holf, Steven Wiliams, Rosie Perez, Margot Robbie
          </Text>
        </Text>
        <Text>
          <Text style={styles.label}>Director:</Text>
          <Text style={styles.onlyTextGray}> K.K. Barret</Text>
        </Text>
        <RNPickerSelect
          value={season}
          onValueChange={onChangeValue}
          textColor="white"
          items={seasons}
        />
        <FlatList
          data={movies}
          keyExtractor={keyExtractor}
          renderItem={itemCapitule}
          // ItemSeparatorComponent={<View style={{height: 10}}></View>}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    borderWidth: 1,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: headerHeight,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  duration: {
    marginRight: 5,
  },
  textGray: {
    color: colors.gray,
    fontSize: 17,
  },
  onlyTextGray: {
    color: colors.gray,
  },
  labelBig: {
    color: colors.gray,
    fontSize: 17,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: colors.gray,
  },
  info: {
    padding: 10,
  },
  sipnosis: {
    marginVertical: 10,
    textAlign: 'justify',
    fontSize: 17,
    color: colors.gray,
    fontWeight: '100',
  },
  downloadButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  containerSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  more: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default Serie;
