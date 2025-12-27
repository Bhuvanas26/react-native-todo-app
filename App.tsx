import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 🔹 Import Screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';

// 🔹 Create Stack Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        {/* 🔐 Authentication Screens */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />

        {/* 🏠 Home / Task List */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerBackVisible: false, // prevent going back to login
          }}
        />

        {/* ➕ Add Task */}
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ title: 'Add Task' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
