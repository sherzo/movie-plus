import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import {Text, Layout, Section, Button} from 'Components';
import detail from 'Assets/img/detail3.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {movies} from '../Utils/mock';
import {colors} from 'Utils';

const heightWindow = Dimensions.get('window').height;
const headerHeight = heightWindow / 4;

const Movie = () => {
  return (
    <Layout>
      <View style={{...styles.header, height: headerHeight}}>
        <Image source={detail} style={styles.image} />
        <Icon
          name="play-circle-outline"
          size={90}
          color="white"
          style={{
            position: 'absolute',
            top: '25%',
            left: '40%',
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>GHOUL 2019 (HD)</Text>
        <View style={styles.row}>
          <Text style={styles.duration}>
            <Text style={styles.labelBig}>Año:</Text>
            <Text style={styles.textGray}> 2020</Text>
            <Text style={styles.labelBig}> Duración:</Text>
            <Text style={styles.textGray}> 109 m.</Text>
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
        <TouchableOpacity>
          <View style={styles.downloadButton}>
            <Icon
              name="download"
              color="white"
              size={30}
              style={{marginLeft: 15}}
            />
            <Text style={styles.textGray}>Descargar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerSocial}>
          <Text style={styles.more}>Tambien te gustará...</Text>
          <Button
            title="Síguenos"
            color="blue"
            icon="instagram"
            iconColor={colors.white}
            color="blue"
            iconSize={20}
          />
        </View>
      </View>
      <Section movies={movies} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    borderWidth: 1,
    // borderColor: 'red',
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

export default Movie;
