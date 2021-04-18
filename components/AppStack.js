import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./MainMenu";
// import ChooseCupCakeBase from "./ChooseOne";
import ChooseCupCakeBase from "./Cupcake/CupCakeBase";
import ChooseCupCakeFilling from "./Cupcake/CupCakeFilling";
import ChooseCupCakeDrops from "./Cupcake/CupCakeDrops";
import ChooseCupCakeCream from "./Cupcake/CupCakeCream";
import ChooseCupCakeDecorations from "./Cupcake/CupCakeDecorations";
import ChoosePieMainFlavour from "./Pie/PieMainFlavour";
import ChoosePieAdditionalFlavour from "./Pie/PieAdditionalFlavour";

import ResultPage from "./ResultPage";
import CompleteOrder from "./CompleteOrder";
import Order from "./Order";

const Stack = createStackNavigator();
const AppStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseCupCakeBase"
        component={ChooseCupCakeBase}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CupCakeFilling"
        component={ChooseCupCakeFilling}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseCupCakeDrops"
        component={ChooseCupCakeDrops}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseCupCakeCream"
        component={ChooseCupCakeCream}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseCupCakeDecorations"
        component={ChooseCupCakeDecorations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChoosePieMainFlavour"
        component={ChoosePieMainFlavour}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChoosePieAdditionalFlavour"
        component={ChoosePieAdditionalFlavour}
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
    </Stack.Navigator>
  );
};
export default AppStack;
