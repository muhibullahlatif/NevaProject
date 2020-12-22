import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen/home';
import Detail from '../screens/DetailScreen/detail';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;