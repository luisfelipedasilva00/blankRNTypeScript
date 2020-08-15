import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '~/constants/Colors';
import useColorScheme from '~/hooks/useColorScheme';
import TabOneScreen from '~/screens/TabOneScreen';
import TabTwoScreen from '~/screens/TabTwoScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
} from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const TabOneStack = createStackNavigator<TabOneParamList>();
const TabTwoStack = createStackNavigator<TabTwoParamList>();

interface RouteProps {
  name: string;
  color: string;
}

const TabBarIcon: React.FC<RouteProps> = ({ name, color }) => {
  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -3 }}
      name={name}
      color={color}
    />
  );
};

const TabOneNavigator: React.FC = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
};

const TabTwoNavigator: React.FC = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
};

const BottomTabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
