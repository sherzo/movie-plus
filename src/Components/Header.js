import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from './Text';
import {Toolbar} from './Toolbar';
import {colors} from 'Utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const midHeight = windowHeight / 2.3;

export const Header = () => {
  const navigation = useNavigation();

  const toPage = (page) => () => navigation.navigate(page);

  const gradient = ['transparent', colors.blueDark];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('Assets/img/headerImage.jpg')}
        style={styles.image}>
        <Toolbar />

        <LinearGradient colors={gradient} style={styles.gradient}>
          <View style={styles.section}>
            <Text style={styles.title}>La casa de papel</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={toPage('MyList')}>
                <View style={styles.button}>
                  <Icon name="plus" color="white" size={20} />
                  <Text>Mi lista</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={toPage('Movie')}>
                <View style={styles.buttonPlay}>
                  <Icon name="play" color="black" size={22} />
                  <Text style={styles.buttonPlayText}>Reproducir</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={toPage('Movie')}>
                <View style={styles.button}>
                  <Icon name="information-outline" color="white" size={20} />
                  <Text>Info</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: midHeight,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
  },
  section: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonPlay: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 2.5,
  },
  buttonPlayText: {
    color: colors.black,
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
