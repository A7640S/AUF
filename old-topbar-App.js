import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';



const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="First Screen">
        <Tab.Screen name="First Screen" component={FirstScreen} />
        <Tab.Screen name="Second Screen" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}