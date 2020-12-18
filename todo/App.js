
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Heading from './app/Heading'
import Input from './app/TextInput'
import Button from './app/Button'
import TodoList from './app/TodoList'

let todoIndex =  0

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  inputChange(inputValue) {
    console.log('input value:', inputValue)
    this.setState({inputValue})

  }
  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)){
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({todos,inputValue:''}, ()=>{console.log('State: ',this.state)})
  }
  deleteTodo () {
    let {todo} = this.state
    todos = todos.filter((todo)=> todo.todoIndex !== todoIndex)
    this.setState({todos})
  }
  toggleComplete (todoIndex) {
    let todos = this.state.todostodos.forEach(
      (todo)=>{
        if (todo.todoIndex === todoIndex){
          todo.complete = !todo.complete
        }
      }
    )
    this.setState({todos})
  }
  render() {
    let {inputValue, todos} = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input inputValue={inputValue}
          inputChange={(text)=> this.inputChange(text)} />
            <TodoList 
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
              todos={todos} />
            <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})


export default App;
