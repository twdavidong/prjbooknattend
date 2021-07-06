import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Keyboard, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CalendarScreen from "./screens/CalendarScreen";
import BookingScreen from "./screens/BookingScreen";
import AttendanceScreen from "./screens/AttendanceScreen";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator mode = "modal">
       <Tab.Screen name = "Home" component = {HomeScreen} />
       <Tab.Screen name = "Login" component = {LoginScreen} options={{ headerShown: false }} />
       <Tab.Screen name = "Calendar" component = {CalendarScreen} />
       <Tab.Screen name = "Booking" component = {BookingScreen} />
       <Tab.Screen name = "Attendance" component = {AttendanceScreen} />
     </Tab.Navigator>
   </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * 
 * //  
 * 
 */