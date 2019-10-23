import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import firebase from '../../config/Firebase';

export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            loading: false,
        }
    }

    handleRegister = () => {
        this.setState({ errorMessage: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ errorMessage: '', loading: false });
                this.props.navigation.navigate('Login')
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
                <Text style={{ color: '#e93766', fontSize: 40 }}>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    autoCorrect={false}
                />
                <Text> {this.state.errorMessage}</Text>
                <Button title="Sign Up" color="#e93766" onPress={this.handleRegister} />
                <View>
                    <Text>Go back to login<Text onPress={() => this.props.navigation.navigate('Login')} style={{ color: '#e93766', fontSize: 18 }}> Sign Up </Text></Text>
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
    }
});
