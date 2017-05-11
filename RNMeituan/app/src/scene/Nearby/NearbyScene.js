import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

export default class NearbyScene extends Component {
  static navigationOptions = {
        title: '附近',
        headerStyle: { backgroundColor: 'white' },

        tabBar: {
          label: '附近',
          icon: ({ focused, tintColor }) => {
            if (focused) return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_merchant_selected@2x.png')}/>);
            else return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_merchant@2x.png')}/>);
          }
        }
  }
  render(){
    return(
      <Text>OrderScene</Text>
    );
  }
}
