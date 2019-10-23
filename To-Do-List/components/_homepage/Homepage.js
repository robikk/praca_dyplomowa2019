import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../../config/Firebase';
import { initializeApp } from 'firebase';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        }
    }

    static navigationOptions = {
        title: 'Home',
        drawerIcon: ({ focused }) => (
            <MaterialIcons name='home' size={24} color={focused ? 'blue' : 'black'} />
        ),
    };

    componentDidMount = () => {
        const { currentUser } = firebase.auth()
        this.setState({currentUser});
    }


    signOutHandler = () => {
        firebase.auth().signOut().then(() => {
            this.setState({ currentUser: null })
        })
            .then(this.props.navigation.navigate('Login'))
    }


    render() {
        const currentUser = this.state
        return (
            <View>
                <Header
                    leftComponent={
                        <MaterialIcons name='menu' size={32} onPress={() => this.props.navigation.openDrawer()} />
                    }
                    centerComponent={<Text> Hi {currentUser && currentUser.email}!</Text>}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View>
                    <Text>NAcisnij sobie</Text>
                    <Button title="Login?" onPress={this.signOutHandler} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
