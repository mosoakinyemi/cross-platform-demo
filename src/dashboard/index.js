import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feeds from './feeds';
import Profile from './profile';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName="Feeds"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Feeds" component={Feeds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
