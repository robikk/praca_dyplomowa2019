import React from 'react'
import { View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity, StyleSheet, TextInput, Button, StatusBar, Alert, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            repassword: ''
        }
    }

    handleSubmit = () => {
        if (this.state.password !== this.state.repassword) {
            Alert.alert("passwords doesn't match!");
        }
        console.log(this.state.userName + this.state.email + this.state.password + this.state.repassword)
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/moze2.png')}>
                                </Image>
                                <Text style={styles.title}> Account information</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput
                                    style={styles.inputs}
                                    autoCapitalize="none"
                                    placeholder="username"
                                    onChangeText={userName => this.setState({ userName })}
                                    value={this.state.userName}
                                    autoCorrect={false}
                                    returnKeyType='next'
                                    underlineColorAndroid='transparent'
                                />
                                <TextInput
                                    style={styles.inputs}
                                    autoCapitalize="none"
                                    placeholder="Email"
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    returnKeyType='next'
                                />
                                <TextInput
                                    secureTextEntry
                                    style={styles.inputs}
                                    autoCapitalize="none"
                                    placeholder="Password"
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    returnKeyType='next'
                                />
                                <TextInput
                                    secureTextEntry
                                    style={styles.inputs}
                                    autoCapitalize="none"
                                    placeholder="Repassword"
                                    onChangeText={repassword => this.setState({ repassword })}
                                    value={this.state.repassword}
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    returnKeyType='next'
                                />
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                        <Button title="Sign in" onPress={this.handleSubmit} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column',
    },
    logoContainer: {       
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 84,
        paddingBottom:20
    },
    title: {
        color: '#f7c744',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 140,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 15,
    },
    inputs: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#fff',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
});
