import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default class Todo extends Component {
  state = {
    todos: [],
    visibilityFileter : 'SHOW_ALL_TODOS'
  }

  render() {
    return (
        <View style={styles.container}>
            <AddTodo/>
            <View>
              <VisibleTodos/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
});
