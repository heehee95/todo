import React from 'react'
import {View} from 'react-native'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, toggleComplete}) => {
    todos = todos.map((todo,index) => {
        return (
            <Todo 
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                key={index}
                todo={todo} />
        )
    })
    return (
        <View>
            {todos}
        </View>    
    )
}

export default TodoList

