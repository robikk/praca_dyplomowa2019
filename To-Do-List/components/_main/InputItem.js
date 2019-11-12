import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Button, Icon, Text, Form, Item, Input, InputGroup } from 'native-base';

const InputItem = (props) => {
    const clearInput = false;
    return (
        <Form>
            <Item inlineLabel>
                <InputGroup>
                    <Input
                        placeholder='To do...'
                        onChangeText={(todoInput) => props.textChange(todoInput)}
                    />
                    <Button iconLeft light onPress={props.addTodo}>
                        <Icon name='add'/>
                        <Text>{props.editItem ? 'edit' : 'add'}</Text>
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