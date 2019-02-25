/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Todo from './src/Todo';
import store from './src/store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Todo/>
      </Provider>
    );
  }
}

