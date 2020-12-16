
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

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }
  inputChange(inputValue) {
    console.log('input value:', inputValue)
    this.setState({inputValue})

  }
  render() {
    const {inputValue} = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading />
          <Input inputValue={inputValue}
          inputChange={(text)=> this.inputChange(text)} />
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
