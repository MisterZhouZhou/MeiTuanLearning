import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

export default class OrderScene extends Component {
  static navigationOptions = {
        title: '订单',
        headerStyle: { backgroundColor: 'white' },
        tabBar: {
          label: '订单',
          icon: ({ focused, tintColor }) => {
            if (focused) return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_order_selected@2x.png')}/>);
            else return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_order@2x.png')}/>);
          }
        }
  }
  render(){
    return(
      <Text>OrderScene</Text>
    );
  }
}
