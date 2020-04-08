import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from './Text';
import {colors} from 'Utils';

export const Button = ({title, icon, color, iconSize, iconColor, rest}) => {
  const backgroundColor = colors[color] || colors.blue;
  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.containerButton, {backgroundColor}]}>
        {icon && (
          <Icon
            name={icon}
            size={iconSize || 20}
            color={iconColor || 'white'}
          />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    textTransform: 'uppercase',
    marginLeft: 4,
  },
});
