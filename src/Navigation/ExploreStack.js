import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from 'Screens/Explore';
import Categorie from 'Screens/Categorie';
import Movie from 'Screens/Movie';
import {colors} from 'Utils';
import {SearchBar} from 'Components';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.black},
      }}>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          header: SearchBar,
        }}
      />
      <Stack.Screen
        name="Categorie"
        component={Categorie}
        options={({route}) => ({title: route.params.categorie.name})}
      />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
}

export default HomeStack;
