import React from 'react'
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { Container, View, Header, Title, Content, Footer, Button, Left, Right, Body, Icon, Text } from 'native-base';

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
                    <Body  style={{alignItems: 'flex-end'}}>
                        <Title> Homepage </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text> Tez nic </Text>
                </Content>
                <Footer>
                    <Button rounded light>
                        <Text>
                            Narazie nic
                        </Text>
                    </Button>
                </Footer>
            </Container>
        )
    }
}

