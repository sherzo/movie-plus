import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from 'Utils';

export const Loading = ({isLoading}) => (
  <ActivityIndicator color={colors.white} animating={isLoading} />
);
