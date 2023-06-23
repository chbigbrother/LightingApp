/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/screens/HomeScreen';
import AlarmScreen from './src/screens/AlarmScreen';
import ReportScreen from './src/screens/ReportScreen';
import ControlScreen from './src/screens/ControlScreen';
import ManageScreen from './src/screens/ManageScreen';

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Header
        placement="center"
        backgroundColor='#FFF'
        leftComponent={{ icon: 'menu', color: '#666', marginLeft: 10 }}
        centerComponent={{ text: '조명스위치', style: { color: '#555', fontSize: 16 } }}
        rightComponent={{ icon: 'home', color: '#666', marginRight: 10 }}
      />
      <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={
          {
            style:{
              height: 50,
            },
          }
        }
        screenOptions={
          {
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          }
        }  
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
        />
        <Tab.Screen
          name="리포트"
          component={ReportScreen}
        />
        <Tab.Screen
          name="제어"
          component={ControlScreen}
        />
        <Tab.Screen
          name="알림"
          component={AlarmScreen}
        />
        <Tab.Screen
          name="기기관리"
          component={ManageScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerBackground : {
    backgroundColor: "#FFF"
  }
});

export default App;
