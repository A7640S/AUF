import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First Screen" component={FirstScreen} />
        <Tab.Screen name="Second Screen" component={SecondScreen} />
        <Tab.Screen name="Third Screen" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}