import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from './screens/Home';
import ResturantDetails from "./screens/ResturantDetails"

export default function navigation() {
    const Stack = createStackNavigator();
    
    const screenOptions ={
       headersShown: false 
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ResturantDetails" component={ResturantDetails}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}
