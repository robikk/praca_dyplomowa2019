import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Registration from './components/_registration/Registration';
import Login from './components/_login/Login';
import Homepage from './components/_homepage/Homepage';
import TodoMain from './components/_main/TodoMain';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';


const MyDrawerNavigator = createDrawerNavigator(
  {
    Homepage: {
      screen: Homepage,
    },
    Registration: {
      screen: Registration
    },
    ToDoList: {
      screen: TodoMain
    }
  },
  {
    drawerType: 'slide',
    drawerWidth: 200,
    drawerBackgroundColor: '#2a2a2a'
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Homepage: {
      screen: MyDrawerNavigator,
    },
    Registration: {
      screen: Registration
    },
    Login: {
      screen: Login
    },
    TodoMain: {
      screen: TodoMain,
    },
  },

)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}
