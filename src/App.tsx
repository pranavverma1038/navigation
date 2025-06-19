import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Details from './screens/Details'


export type RootStackParams = {
  Home: undefined;
  Details : {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParams>()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:"Trending Products"
        }}
        >
        </Stack.Screen>
        <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title:"Product Details"
        }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})