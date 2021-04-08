import React from "react";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./MainScreen/HomeScreen";
import HomeRoute from "./MainScreen/HomeRoute";
import Post from "./Posting/Post";
import MainRouting from "./MainRouting";
import Welcome from "./AuthDirection/Welcome";

const Stack = createStackNavigator();
const GainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreenNav" component={MainRouting} />

      <Stack.Screen name="Reg" component={Welcome} />
    </Stack.Navigator>
  );
};

export default GainRoute;
