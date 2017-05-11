import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

export default class NearbyScene extends Component {
  static navigationOptions = {
        title: '我的',
        headerStyle: { backgroundColor: 'white' },
        tabBar: {
          label: '我的',
          icon: ({ focused, tintColor }) => {
            if (focused) return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_mine_selected@2x.png')}/>);
            else return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_mine@2x.png')}/>);
          }
        }
  }
  render(){
    return(
      <Text>NearbyScene</Text>
    );
  }
}
