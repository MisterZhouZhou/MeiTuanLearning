/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';

import StartViews from './app/src/View/StartView'

export default class RNMeituann extends Component {

  render() {
    return (
        <StartViews style={{flex:1}}/>
    );
  }
}

AppRegistry.registerComponent('RNMeituann', () => RNMeituann);
