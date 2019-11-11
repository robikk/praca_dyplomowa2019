import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Icon, Button, View, Input } from 'native-base';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleCancel = () => {
        this.props.navigation.navigate('TodoMain');
    }

    render() {
        const todoItem = this.props.todoItem;
        return (
            <TouchableOpacity
                style={styles.containerTouchable}
                onPress={() => this.props.toggleDone()}
            >
                <View style={styles.containerTouchable}>
                    <View>
                        <Text style={(todoItem.done) ? styles.doneItem : styles.notDone}>
                            {todoItem.todo}
                        </Text>
                        <Text style={styles.date}>{todoItem.chosenDate}</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Button iconLeft success onPress={() => Alert.alert(
                            'Update',
                            'Do you want to edit item?',
                            [
                                { text: 'Cancel', onPress: () => this.handleCancel },
                                { text: 'Edit', onPress: () => console.log('meh')}
                            ],
                            { cancelable: false },
                        )}>
                            <Icon name='create' size={48} style={{ marginRight: 15, }} />
                        </Button>
                        <Button iconLeft danger onPress={() => Alert.alert(
                            'Delete',
                            'Do you want to delete this item?',
                            [
                                { text: 'Cancel', onPress: () => this.handleCancel },
                                { text: 'Delete', onPress: () => this.props.removeItem() },
                            ],
                            { cancelable: false },
                        )}>
                            <Icon name='trash' size={48} style={{ marginRight: 15, }} />
                        </Button>
                    </View>
                </View>
            </TouchableOpacity >

        )
    }
}
const styles = StyleSheet.create({
    containerTouchable: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        flexShrink: 1,
        justifyContent: 'space-between',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingLeft: 15,
    },
    doneItem: {
        color: '#1a1a1a',
        fontSize: 24,
        textDecorationLine: 'line-through',
    },
    notDone: {
        color: '#000',
        fontSize: 24,
        textDecorationLine: 'none'
    },
    date: {
        fontSize: 12,
        opacity: 0.8,
        color: '#848785',
        justifyContent: 'flex-start'
    }
})