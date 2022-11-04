import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountNav"
        component={AccountScreen}
        options={{ title: "Mi cuentA" }}
      />
    </Stack.Navigator>
  );
}
