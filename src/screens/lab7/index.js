import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "../lab7/Home";
import Profile from "../lab7/Profile";
import Favorites from "../lab7/Favorites";
import Settings from "../lab7/Settings";

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="TopTab1" component={Home} />
      <TopTab.Screen name="TopTab2" component={Profile} />
      <TopTab.Screen name="TopTab3" component={Favorites} />
      <TopTab.Screen name="TopTab4" component={Settings} />
    </TopTab.Navigator>
  );
}

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF6C22',
        tabBarLabelPosition: 'beside-icon',
        tabBarLabel: ({ focused, color }) => {
          return focused ? <Text style={{ color, marginLeft: 20 }}>{route.name}</Text> : null;
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = route.name === 'Home' ? 'home' :
            route.name === 'Profile' ? 'person' :
              route.name === 'Favorites' ? 'heart' :
                route.name === 'Settings' ? 'settings' : '';
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <BottomTab.Screen name="Home" component={TopTabs} />
      <BottomTab.Screen name="Profile" component={TopTabs} />
      <BottomTab.Screen name="Favorites" component={TopTabs} />
      <BottomTab.Screen name="Settings" component={TopTabs} />
    </BottomTab.Navigator>
  );
}

export default BottomTabs;
