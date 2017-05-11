/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';

import RootScene from './app/src/RootScene'

export default class RNMeituann extends Component {

  render() {
    return (
        <RootScene/>
    );
  }
}

AppRegistry.registerComponent('RNMeituann', () => RNMeituann);
