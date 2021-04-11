import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./MainMenu";
import ChooseOne from "./ChooseOne";
import ResultPage from "./ResultPage";
import CompleteOrder from "./CompleteOrder";
import Order from "./Order";

const Stack = createStackNavigator();
const AppStack = ({ navigation }) => {
  <Stack.Navigator>
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
      name="Order"
      component={Order}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CompleteOrder"
      component={CompleteOrder}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>;
};
export default AppStack;
