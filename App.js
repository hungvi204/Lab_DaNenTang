import React, { useEffect } from "react";
import Lab3 from "./src/screens/lab3";
import Splash from "./src/screens/auth/splash";
import { SafeAreaView } from "react-native";
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/app/Home"
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile"
import { Image } from "react-native";
import Bai2 from "./src/screens/lab5/bai2";
import Bai3 from "./src/screens/lab5/bai3";
import Lab6 from "./src/screens/lab6";
import HomeLab6 from "./src/screens/lab6/home";
import Lab7 from "./src/screens/lab7";
import Crud from "./src/screens/lab8/CRUD";
import ListUser from "./src/screens/lab8/listUser";


const App = () => {
  return (
    // <NavigationContainer>
    //   <Lab7></Lab7>
    // </NavigationContainer>
    <Crud></Crud>

  );
};

export default App;