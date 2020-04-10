import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'Screens/Home';
import Movie from 'Screens/Movie';
import MyList from 'Screens/MyList';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="MyList" component={MyList} />
    </Stack.Navigator>
  );
}

export default HomeStack;
