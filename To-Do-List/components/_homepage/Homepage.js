import React from 'react'
import { StyleSheet, ImageBackground, Image, TouchableHighlight, StatusBar } from 'react-native';
import { Container, View, Header, Title, Content, Footer, Button, Left, Right, Body, Icon, Text, FooterTab } from 'native-base';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'flex-end' }}>
                        <Title> Homepage </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <ImageBackground
                        style={styles.imgBackground}
                        source={require('../../assets/design.png')}
                    >
                        <View style={styles.imgBackground}>
                            <TouchableHighlight
                                style={[styles.profileImgContainer, { borderColor: 'lime', borderWidth: 1, overflow: 'hidden' }]}
                            >
                                <Image source={require('../../assets/avatar.png')} style={styles.profileImg} />
                            </TouchableHighlight>
                            <View>
                                <Text> Cos </Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.container}>
                        <Text> Cos </Text>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full success onPress={() => this.props.navigation.navigate('TodoMain')}>
                            <Text>Add todo</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImgContainer: {
        marginTop: 20,
        marginBottom: 10,
        height: 90,
        width: 90,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    profileImg: {
        height: 90,
        width: 90,
        borderRadius: 50,
    },
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});