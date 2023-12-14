import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import { NavigationPath } from "../constant/navigationRoute";

import { BottomTab } from "../screens/bottomTab";

const Stack = createNativeStackNavigator();

const Navigation = ({ params }) => {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

function AppStack() {

  return (
    <Stack.Navigator
      initialRouteName={NavigationPath.MAIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NavigationPath.MAIN} component={BottomTab} />

    </Stack.Navigator>
  );
}

export default Navigation;
