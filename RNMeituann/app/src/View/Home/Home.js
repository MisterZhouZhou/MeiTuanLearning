/*
 * home 页
 */
import React, { Component } from 'react';
import {Text, View, ScrollView, Dimensions, Platform, Image} from 'react-native';
//获取可视窗口的宽高
var { width, height, scale } = Dimensions.get('window');

var CloverSlider = require('./view/CloverSlider');
import MenuCard from './view/JZMenuCard'
import JZRushCell from './view/JZRushCell'
import JZDiscount from './view/JZDiscount'

export default class Home extends Component{
  static navigationOptions = {
    title: '首页',
    tabBar: {
      label: '首页',
      icon: ({ focused, tintColor }) => {
        if (focused) return (<Image style={{width:20,height:20,}} source={require('../../../../Asserts/icon_tabbar_homepage_selected@2x.png')} />);
        else return (<Image style={{width:20,height:20,}} source={require('../../../../Asserts/icon_tabbar_homepage@2x.png')}/>);
      }
    }
  }

  selectRush(){
   if (Platform.OS === 'ios') {
    this.props.navigation.navigate('WebView',{url: null});
   }else{
     //android对应的处理
   }
  }

  selectDiscount(urls){
    if (Platform.OS === 'ios') {
      this.props.navigation.navigate('WebView',{url: urls});
    }else{
      //android对应的处理
    }
  }

  render(){
    return(
      <View style = {{flex: 1}}>
        <ScrollView>
          <CloverSlider />
          <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
          <MenuCard/>
          <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
          <JZRushCell onSelect = {() => this.selectRush()}/>
          <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
          <JZDiscount
            onSelect1 = {(a) => this.selectDiscount(a)}
          />
        </ScrollView>
      </View>
    );
  }
}

