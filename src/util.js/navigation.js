import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from "../home";
import SecondScreen from "../secondScreen";

const ScreenStackNavigator = createStackNavigator();
const ScreenNavigator = () => {
    return(
        <ScreenStackNavigator.Navigator>
            <ScreenStackNavigator.Screen name="Home" component={Home} />
            <ScreenStackNavigator.Screen name="SecondScreen" component={SecondScreen} />
        </ScreenStackNavigator.Navigator>
    )
}

const NavContainer = () => {
    return(
        <NavigationContainer>
            <ScreenNavigator/>
        </NavigationContainer>
    )
}

export default NavContainer;