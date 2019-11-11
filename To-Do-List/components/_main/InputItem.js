import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Button, Icon, Text, Form, Item, Input, InputGroup } from 'native-base';

const InputItem = (props) => {
    return (
        <Form>
            <Item inlineLabel>
                <InputGroup>
                    <Input
                        placeholder='To do...'
                        onChangeText={(todoInput) => props.textChange(todoInput)}
                        value={props.todoInput}
                    />
                    <Button iconLeft light onPress={props.addTodo}>
                        <Icon name='add' />
                        <Text>Add</Text>
                    </Button>
                    <TouchableOpacity onPress={props.handlePicker}>
                        <Button iconLeft light onPress={props.showPicker}>
                            <Icon name='calendar' size={48} style={{ marginRight: 15 }} />
                        </Button>
                    </TouchableOpacity>
                </InputGroup>
            </Item>
        </Form>
    );
}

export default InputItem;