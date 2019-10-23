import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Settings extends React.Component {

    static navigationOptions = {
        title: 'Settings',
        drawerIcon: ({ focused }) => (
            <MaterialIcons name='settings' size={24} color={focused ? 'blue' : 'black'} />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> Settings </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a1a1a1',
        alignItems: 'center',
        justifyContent: 'center',
    }
})