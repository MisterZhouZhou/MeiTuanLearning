import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import color from './color'
import { screen} from '../common'

// create a component
export default class Separator extends Component {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.border,
    },
});
