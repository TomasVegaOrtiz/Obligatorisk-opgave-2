// Importer de nødvendige komponenter
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import ListView from './page-views/list-view';
import MainView from './page-views/main-view';
import MapContainerView from './page-views/map-view';
import CameraContainerView from './page-views/camera-view';
import LoginView from './page-views/login-view';
import CreateView from './page-views/create-view';
import styles from './styles';

// Opret Tab Navigator og Stack Navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Opret Tab Navigator som en funktion
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'camera' : 'camera-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="List" component={ListView} />
      <Tab.Screen name="Map" component={MapContainerView} />
      <Tab.Screen name="Profile" component={MainView} />
      <Tab.Screen name="Camera" component={CameraContainerView} />
    </Tab.Navigator>
  );
}

// Hoved App komponent
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {/* Hjem-skærm med bundnavigation */}
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        {/* Naviger til Login og Opret bruger */}
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Create" component={CreateView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
