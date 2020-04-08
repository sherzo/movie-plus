import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors} from 'Utils';

export const Layout = ({onScroll, children, style, rest}) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={[styles.scrollView, style]}
        onScroll={onScroll}
        {...rest}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.dark,
    minHeight: '100%',
  },
});
