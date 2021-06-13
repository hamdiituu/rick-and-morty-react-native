import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Episode, Character} from '../screens';

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Home'}
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}
        name={'Episode'}
        component={Episode}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}
        name={'Character'}
        component={Character}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
