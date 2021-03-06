import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./MainScreen/HomeScreen";
import HomeRoute from "./MainScreen/HomeRoute";
import Post from "./Posting/Post";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import TabDesign from "./TabDesign/TabDesign";
import { Navigation } from "react-native-navigation";
import { AuthContext } from "./AuthPath/AuthState";
import Login_Screen from "./AuthDirection/SignedUp";
import Profile from "./Posting/Profile";

const Tab = createBottomTabNavigator();
const MainRouting = ({ onPress }) => {
  const { current } = useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName="Home Screen"
      tabBarOptions={{
        activeBackgroundColor: "white",
        activeTintColor: "#651E32",
        inactiveBackgroundColor: "white",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home Screen"
        component={HomeRoute}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabDesign onPress={() => navigation.navigate("Home Screen")} />
          ),
        })}
      />
      {current ? (
        <Tab.Screen
          name="Make Post"
          component={Post}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                size={size}
                color={color}
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Sign Up"
          component={Login_Screen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default MainRouting;
// tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" size={size} color={color} />
//           ),
