import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from 'Utils';
import {useNavigation} from '@react-navigation/native';
import Logo from 'Assets/logo/48x48.svg';

export const Toolbar = () => {
  const navigation = useNavigation();

  const toPage = (page) => () => navigation.navigate(page);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={toPage('Home')}>
          <Logo style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        {/* <View style={styles.borderIcon}>
          <Icon name="information-variant" color="white" size={22} />
        </View>
        <View style={styles.borderIcon}>
          <Icon name="television-classic" color="white" size={22} />
        </View>
        <View style={styles.borderIcon}>
          <Icon name="information-variant" color="white" size={22} />
        </View> */}
        <View style={styles.borderIcon}>
          <TouchableOpacity onPress={toPage('Explore')}>
            <Icon name="magnify" color="white" size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  left: {
    flex: 2,
  },
  logo: {
    width: 40,
    height: 40,
  },
  right: {
    flex: 1.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  borderIcon: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
  },
});
