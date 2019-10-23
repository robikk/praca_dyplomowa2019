import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from '../config/Firebase';

export default class Loading extends React.Component {
    
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Homepage' : 'Login')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: '#0cf54a', fontSize: 40 }}>
                    Loading...
            </Text>
                <ActivityIndicator color='#0cf54a' size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})