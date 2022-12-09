import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="First Screen">
        <Drawer.Screen name="First Screen" component={FirstScreen} />
        <Drawer.Screen name="Second Screen" component={SecondScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}