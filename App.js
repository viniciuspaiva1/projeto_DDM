import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import CheckOrder from './src/screen/CheckOrder';
import Orders from './src/screen/Orders';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false }}/> 
        <Stack.Screen name="CheckOrder" component={CheckOrder} options ={{title: "Monte seu Pedido"}}/> 
        <Stack.Screen name="Orders" component={Orders} options ={{title: "Confira o seu Pedido"}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


