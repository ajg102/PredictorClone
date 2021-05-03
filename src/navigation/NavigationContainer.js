import React from 'react';
import {Text, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {PRIMARY, BLACK, MUTED, WHITE} from '../constants/colors';
import NBCSportsLogo from '../assets/images/nbcsports.png';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntriesScreen from '../screens/Entries';
import LeaguesScreen from '../screens/Leagues';
import LiveResultsScreen from '../screens/LiveResults';
import LobbyScreen from '../screens/Lobby';
import ProfileScreen from '../screens/Profile';

const Tabs = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tabs.Navigator
    backBehavior="initialRoute"
    screenOptions={screenOptions}
    tabBarOptions={tabBarOptions}>
    <Tabs.Screen name="Lobby" component={LobbyScreen} />
    <Tabs.Screen name="Entries" component={EntriesScreen} />
    <Tabs.Screen name="Results" component={LiveResultsScreen} />
    <Tabs.Screen name="Leagues" component={LeaguesScreen} />
    <Tabs.Screen name="Profile" component={ProfileScreen} />
  </Tabs.Navigator>
);

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color}) => {
    let iconName;
    switch (route.name) {
      case 'Lobby':
        iconName = 'star';
        break;
      case 'Entries':
        iconName = 'format-list-bulleted';
        break;
      case 'Results':
        iconName = 'trophy-variant-outline';
        break;
      case 'Leagues':
        iconName = 'account-group-outline';
        break;
      case 'Profile':
        iconName = 'account-circle';
        break;
      default:
        iconName = 'star';
    }

    return (
      <MaterialIcon name={iconName} size={focused ? 22 : 18} color={color} />
    );
  },
  tabBarLabel: ({focused, color}) => {
    let label = '';
    switch (route.name) {
      case 'Lobby':
        label = 'Lobby';
        break;
      case 'Entries':
        label = 'My Entries';
        break;
      case 'Results':
        label = 'Live Results';
        break;
      case 'Leagues':
        label = 'Leagues';
        break;
      case 'Profile':
        label = 'Profile';
        break;
      default:
        label = 'Error';
    }
    return <Text style={{color, fontSize: focused ? 11 : 8}}>{label}</Text>;
  },
});

const tabBarOptions = {
  showLabel: true,
  keyboardHidesTabBar: true,
  allowFontScaling: false,
  activeTintColor: PRIMARY,
  inactiveTintColor: MUTED,
  style: {
    backgroundColor: BLACK,
  },
};

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false}}>
    <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={({navigation, route}) => {
        return {
          title: 'Sports Predictor',
          headerTintColor: WHITE,
          headerTitle: () => (
            <Image
              source={NBCSportsLogo}
              style={{
                alignSelf: 'center',
                resizeMode: 'contain',
                width: 150,
                height: 48,
              }}
            />
          ),
          headerStyle: {
            backgroundColor: BLACK,
          },
        };
      }}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={BLACK} />
    <StackNavigator />
  </NavigationContainer>
);
