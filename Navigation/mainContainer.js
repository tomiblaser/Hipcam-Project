import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "../Screens/LogIn";
import DashboardScreen from "../Screens/Dashboard";

const Stack = createNativeStackNavigator()

const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }
                }>

                <Stack.Screen
                    name='LogInScreen'
                    component={LogInScreen}
                />

                <Stack.Screen
                    name='DashboardScreen'
                    component={DashboardScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default MainStack