import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MealsEatenScreen from './screens/MealsEatenScreen';
import MealsRecommendedScreen from './screens/MealsRecommendedScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Authenticated tabs
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals Eaten" component={MealsEatenScreen} />
      <Tab.Screen name="Meals Recommended" component={MealsRecommendedScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} onLoginSuccess={() => setIsLoggedIn(true)} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
