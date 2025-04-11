import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MealsEatenScreen from './screens/MealsEatenScreen';
import MealsRecommendedScreen from './screens/MealsRecommendedScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import PortfolioScreen from './screens/PortfolioScreen';

import { UserProvider, useUser } from './contexts/UserContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Meals Eaten" component={MealsEatenScreen} />
      <Tab.Screen name="Meals Recommended" component={MealsRecommendedScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginUser } = useUser();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login">
              {(props) => (
                <LoginScreen
                  {...props}
                  onLoginSuccess={(userData) => {
                    loginUser(userData);
                    setIsLoggedIn(true);
                  }}
                />
              )}
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

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
