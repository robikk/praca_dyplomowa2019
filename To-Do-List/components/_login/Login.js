import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../../config/Firebase';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            loading: false,
        }
    }

    handleLogin = () => {
        this.setState({ errorMessage: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ errorMessage: '', loading: false });
                this.props.navigation.navigate('Homepage')
            })
            .catch(() => {
                this.setState({
                    errorMessage: Alert.alert('Invalid email or password'),
                    loading: false
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: '#e93766', fontSize: 40 }}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    autoCorrect={false}
                />
                <Text style={styles.error}> {this.state.errorMessage}</Text>
                <Button title="Login" color="#e93766" onPress={this.handleLogin} />
                <View>
                    <Text> Don't have an account? <Text onPress={() => this.props.navigation.navigate('Registration')} style={{ color: '#e93766', fontSize: 18 }}> Sign Up </Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        fontSize: 20,
        width: '90%',
        borderColor: '#9b9b9b',
        borderBottomWidth: 1,
        marginTop: 8,
        marginVertical: 15
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    }
});
