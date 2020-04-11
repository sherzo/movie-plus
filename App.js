import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from 'Navigation/HomeStack';
import ExploreStack from 'Navigation/ExploreStack';
import Series from 'Screens/Series';
import Downloads from 'Screens/Downloads';

import {YellowBox} from 'react-native';
import {colors} from 'Utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

YellowBox.ignoreWarnings(['Remote debugger']);

const Tab = createBottomTabNavigator();

const getTabBarIcon = (name) => ({color, size}) => (
  <Icon name={name} color={color} size={size} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.white,
          inactiveTintColor: colors.gray,
          activeBackgroundColor: colors.black,
          inactiveBackgroundColor: colors.black,
          keyboardHidesTabBar: true,
          style: {
            borderTopColor: colors.black,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'Inicio',
            tabBarIcon: getTabBarIcon('home'),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={{
            title: 'Exporar',
            tabBarIcon: getTabBarIcon('magnify'),
          }}
        />
        <Tab.Screen
          name="Series"
          component={Series}
          options={{
            title: 'Series',
            tabBarIcon: getTabBarIcon('file-document-box'),
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={Downloads}
          options={{
            title: 'Descargas',
            tabBarIcon: getTabBarIcon('download'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
