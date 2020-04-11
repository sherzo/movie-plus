import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Serie from 'Screens/Serie';
import Series from 'Screens/Series';
import {colors} from 'Utils';

const Stack = createStackNavigator();

function SeriesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.black},
      }}>
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="Serie" component={Serie} />
    </Stack.Navigator>
  );
}

export default SeriesStack;
