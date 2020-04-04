import React from 'react';
import {Text as TRN, StyleSheet} from 'react-native';
import {colors} from 'Utils';

export const Text = ({children}) => <TRN style={styles.text}>{children}</TRN>;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
