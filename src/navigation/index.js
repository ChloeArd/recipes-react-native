import React from "react";
import TasksScreen from "../screens/Tasks";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RecipesStack} from "./RecipesStack";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{headerShown: false}}>
                <Tabs.Screen name="Recettes" component={RecipesStack} />
                <Tabs.Screen name="Liste" component={TasksScreen} />
                <Tabs.Screen name="Profile" component={TasksScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}