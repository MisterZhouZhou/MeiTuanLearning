import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class ShangMen extends Component{
  static navigationOptions = {
    title: '上门',
    tabBar: {
      label: '上门',
      icon: ({ focused, tintColor }) => {
        if (focused) return (<Image style={{width:20,height:20,}} source={require('../../../../Asserts/icon_tabbar_onsite_selected@2x.png')} />);
        else return (<Image style={{width:20,height:20,}} source={require('../../../../Asserts/icon_tabbar_onsite@2x.png')}/>);
      }
    }
  }
  render(){
    return(
       <View style={{flex: 1, marginTop: 64}}>
         <Text>ShangMen</Text>
       </View>
    );
  }
}
