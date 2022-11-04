import { StyleSheet, Text, View } from "react-native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
