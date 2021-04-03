import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login";
import MainMenu from "./components/MainMenu";
import Register from "./components/Register";
import ChooseOne from "./components/ChooseOne";
import ResultPage from "./components/ResultPage";
import CompleteOrder from "./components/CompleteOrder";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTintColor: "#BDBDBD" }}
        />
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CupCake"
          component={ChooseOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompleteOrder"
          component={CompleteOrder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTintColor: "#BDBDBD" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
