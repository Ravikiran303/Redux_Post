import React, {Component} from 'react';
import {StyleSheet, TextInput, View,TouchableHighlight,Text} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions';


class AddTodo extends Component {
    state = {
        text:''
    }
    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        this.setState({text:''})
    }
  render() {
    return (
        <View style={styles.main}>
        <TextInput style={styles.itemInput} 
        placeholder="Enter your text" 
        onChange = {(text) => this.setState(text)}
        value={this.state.text}/>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={() => this.addTodo(this.state.text)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column'
      },
      itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
      },
      buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
      },
      button: {
        height: 45,
        width:200,
        marginLeft:50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
      }
    
});
