import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreens from './src/modules'

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={AuthScreens.Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}