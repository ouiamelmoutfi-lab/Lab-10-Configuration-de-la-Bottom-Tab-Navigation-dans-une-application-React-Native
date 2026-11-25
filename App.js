import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

// Conserver les composants existants si présents dans le starter code
// import Header from './components/Header';
// import Footer from './components/Footer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Header /> */}

        <View style={styles.content}>
          <Tab.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
          </Tab.Navigator>
        </View>

        {/* <Footer /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});