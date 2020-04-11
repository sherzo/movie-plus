import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'Screens/Home';
import Movie from 'Screens/Movie';
import MyList from 'Screens/MyList';
import {colors} from 'Utils';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen name="MyList" component={MyList} />
    </Stack.Navigator>
  );
}

export default HomeStack;
