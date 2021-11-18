import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from './screens/Home';
import ResturantDetails from "./screens/ResturantDetails"
import { Provider as ReduxProvider } from "react-redux";
import  configureStore  from "./redux/store"

const store = configureStore();
export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions ={
       headersShown: false 
    }

    return (
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ResturantDetails" component={ResturantDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
}
