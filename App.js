import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import HospitalScreen from './Screens/Hospital';
import SettingsScreen from './Screens/Settings';
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Hospital: HospitalScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home'){
          iconName = `ios-home`;
        } else if (routeName === 'Hospital'){
          iconName = 'ios-medkit';
        } else if (routeName === 'Settings'){
          iconName = `ios-settings`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00695C',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);