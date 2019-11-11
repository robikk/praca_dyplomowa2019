import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, View, Header, Title, Content, Footer, Button, Left, Right, Body, Icon, Text, } from 'native-base';
import TodoItem from './TodoItem';
import InputItem from './InputItem';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class TodoMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoInput: '',
            todos: [],
            isVisible: false,
            chosenDate: '',
            newTodoValue: '',
        }
    }

    addTodo = () => {
        let todos = this.state.todos

        todos.unshift({
            id: todos.length + 1,
            todo: this.state.todoInput,
            done: false,
            chosenDate: this.state.chosenDate
        })
        this.setState({
            todos,
            todoInput: '',
        })
        console.log(this.state.todos)
    }

    editItem = () => {

    }

    removeItem = (item) => {
        let todos = this.state.todos
        todos = todos.filter((todo) => todo.id !== item.id);
        this.setState({ todos });
    }

    toggleDone = (item) => {
        let todos = this.state.todos
        todos = todos.map((todo) => {
            if (todo.id == item.id) {
                todo.done = !todo.done
            }
            return todo
        })
        this.setState({ todos })
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    render() {
        {/* const newTodos = [];
        this.state.todos.forEach(obj => {
            if(!newTodos.some(o => o.name === obj.name)){
                newTodos.push({...obj})  moze byc git przy mapowaniu.
            }
        })*/}
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title> ToDoList </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <DateTimePicker
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'datetime'}
                        is24Hour={false}
                    />
                    <InputItem
                        textChange={todoInput => this.setState({ todoInput })}
                        addTodo={() => this.addTodo()}
                        showPicker={() => this.showPicker()}
                        handlePicker={() => this.handlePicker()}
                    />
                    <Body>
                        <FlatList
                            data={this.state.todos}
                            extraData={this.state}
                            keyExtractor={(item, i) => i.toString()}
                            renderItem={({ item, i }) => {
                                return (
                                    <TodoItem
                                        todoItem={item}
                                        toggleDone={() => this.toggleDone(item)}
                                        removeItem={() => this.removeItem(item)}
                                    />
                                )
                            }}
                        />
                    </Body>
                </Content>
                <Footer>
                    <Button rounded light>
                        <Text onPress={() => this.props.navigation.navigate('Homepage')}>Go back</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

/*
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let filteredTaskList = [...storagedTaskList];

    filteredTaskList = filteredTaskList.filter(task => task.toLowerCase().includes(searchText));

    ul.textContent = '';
    filteredTaskList.forEach((element) => {
        ul.innerHTML += `<li>${element}</li>`;
    })

    if (e.target.value === '') {
        renderTaskList();
    }
}
*/