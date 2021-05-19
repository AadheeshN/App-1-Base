import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import Tasks from './screens/taskscreen';


export default function App() {
  return (
    <AppContainer />
  );
}

var AppNavigator = createSwitchNavigator({
  Tasks: Tasks
})

const AppContainer =  createAppContainer(AppNavigator);