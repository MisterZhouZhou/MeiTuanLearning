import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class More extends Component{
  static navigationOptions = {
    title: '更多',
    tabBar: {
      label: '更多',
      icon: ({ focused, tintColor }) => {
        if (focused) return (<Image style={{width:20,height:20,}} source={require('../../../../Asserts/icon_tabbar_misc_selected@2x.png')} />);
        else return (<Image style={{width:20,height:20,}} source={require('../../../../Asserts/icon_tabbar_misc@2x.png')}/>);
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
