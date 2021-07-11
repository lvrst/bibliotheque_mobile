import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from './screens/BookScreen';
import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const Stack = createStackNavigator();

  // function goToStart() {
  //   navigation.reset({
  //     index: 0,
  //     name: 'SplashScreen',
  //   });
  // }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get started" screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerShown: false
    }}>
    <Stack.Screen name="Book detail" component={BookScreen} options={{headerShown: true}} />
        <Stack.Screen name="My books" component={LibraryScreen} options={{headerShown: true}} />
        <Stack.Screen name="Get started" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}