import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './Screens/HomeScreen';
import HospitalScreen from './Screens/Hospital';
import SettingsScreen from './Screens/Settings';
const TabNavigator = createBottomTabNavigator(
  {
    진찰: HomeScreen,
    병원매칭: HospitalScreen,
    // 세팅: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const routeName = navigation.state.routeName;
        console.log( routeName )
        let iconName;
        if (routeName === '진찰'){
          iconName = `stethoscope`;
          return <FontAwesome name = {iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        } else if (routeName === '병원매칭'){
          iconName = 'map';
          return <Foundation name = {iconName} size={horizontal ? 20 : 25} color={tintColor} />
        } 
        // else if (routeName === '세팅'){
        //   iconName = `ios-settings`;
        //   return <Ionicons name = {iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        // }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
      },
    }),
    tabBarOptions: {
      activeTintColor: '#44dd33',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);