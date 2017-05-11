import React, { Component } from 'react';
import { View } from 'react-native';

import color from './color'

// create a component
export default class SpacingView extends Component {
    render() {
        return (
            <View style={{height: 14,backgroundColor: color.background}}>
            </View>
        );
    }
}
