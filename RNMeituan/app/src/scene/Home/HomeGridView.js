import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../widget'
import { screen, system } from '../../common'
import HomeGridItem from './HomeGridItem'


export default class HomeGridView extends Component {

    static defaultProps = {
        infos: []
    }

    render() {
        let { infos } = this.props
        let gridItems = infos.map(
            (info, i) => (
                <HomeGridItem
                    info={infos[i]}
                    key={i}
                    onPress={() => this.props.onGridSelected(i)} />
            )
        )
        return (
            <View style={styles.container}>
                {gridItems}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixel,
        borderLeftWidth: screen.onePixel,
        borderColor: color.border
    },
});
