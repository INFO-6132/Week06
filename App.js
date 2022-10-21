import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import SignUp from './components/Signup';
import Dashboard from './components/Dashboard'

import { 
  Text, 
  View
 } from "react-native";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      sreenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            {title: 'Login'}
          }/>
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={
            {title: 'Signup'}
          }/>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={
            {title: 'Dashboard'}
          }/>
      </Stack.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );

}

 export default App;