import React from 'react';
import { Text, ScrollView, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Loading from './config/Loading';
import Registration from './components/_registration/Registration';
import Login from './components/_login/Login'
import Homepage from './components/_homepage/Homepage';
import Settings from './components/_userService/Settings';

const DrawerContent = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Homepage: {
      screen: Homepage
    },
    Settings: Settings,
  },
  {
    drawerBackgroundColor: 'lime',
    contentComponent: DrawerContent
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Loading,
    Homepage: { screen: DrawerNavigator },
    Login: { screen: Login },
    Registration: { screen: Registration },
  },
  {
    initialRouteName: 'Loading',
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
