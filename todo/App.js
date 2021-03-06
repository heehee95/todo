import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


// class App extends Component {

//   <View style={styleSet.rootContainer}>
//     <View style={styleSet.displayContainer}>
//     </View>
//     <View style={styleSet.inputContainer}>
//     </View>
//   </View>

// }


// const styleSet = StyleSheet.create({
//   rootContainer: {
//     flex:1
//   },
//   displayContainer: {
//     flex:2,
//     backgroundColor: '#193441'
//   },
//   inputContainer:{
//     flex:8,
//     backgroundColor: '#3E606F'
//   }
// })












import Heading from './app/Heading'
import Input from './app/TextInput'
import Button from './app/Button'
import TodoList from './app/TodoList'
import TabBar from './app/TabBar'

let todoIndex =  0 //왜 여기에 정의 했을까? state에 넣으면 되잖나?

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
    this.setType = this.setType.bind(this)
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
  deleteTodo (todoIndex) {
    let {todos} = this.state
    todos = todos.filter((todo)=> todo.todoIndex !== todoIndex)
    this.setState({todos})
  }
  toggleComplete (todoIndex) {
    let {todos} = this.state
    todos = todos.map(
      (todo)=>{
        if (todo.todoIndex === todoIndex){
         todo.complete = !todo.complete
        }
        return todo
      }
    )
    this.setState({todos})
  }
  setType (type) {
    this.setState({type})
  }
  render() {
    const {inputValue, todos, type} = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input inputValue={inputValue}
          inputChange={(text)=> this.inputChange(text)} />
            <TodoList 
              type={type}
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
              todos={todos} />
            <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType}/>
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
