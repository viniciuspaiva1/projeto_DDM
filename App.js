import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import CheckOrder from './screen/CheckOrder';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="CheckOrder" component={CheckOrder} options ={{headerShown: false}}/>       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


