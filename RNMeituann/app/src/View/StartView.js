/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {} from 'react-native';
import {RootNavigator} from './Route'


// class TabbarView extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab:'home',
//     };
//   }

//   render(){
//     return (
//       <TabBarIOS
//         tintColor='rgb(53,184,174)'
//         ref='tabbar'>
//        {this._createTabbarItem('首页',require('./Asserts/icon_tabbar_homepage@2x.png'),require('./Asserts/icon_tabbar_homepage_selected@2x.png'),'home')}
//        {this._createTabbarItem('上门',require('./Asserts/icon_tabbar_onsite@2x.png'),require('./Asserts/icon_tabbar_onsite_selected@2x.png'),'shangmen')}
//        {this._createTabbarItem('商家',require('./Asserts/icon_tabbar_merchant_normal@2x.png'),require('./Asserts/icon_tabbar_merchant_selected@2x.png'),'shangjia')}
//        {this._createTabbarItem('我的',require('./Asserts/icon_tabbar_mine@2x.png'),require('./Asserts/icon_tabbar_mine_selected@2x.png'),'wode')}
//        {this._createTabbarItem('更多',require('./Asserts/icon_tabbar_misc@2x.png'),require('./Asserts/icon_tabbar_misc_selected@2x.png'),'more')}
//       </TabBarIOS>
//     );
//   }

//   // 创建TabBarIOS.Item
//   _createTabbarItem(title,icon,selicon,selectedTab){
//     return (
//       <TabBarIOS.Item
//         title = {title}
//         icon = {icon}
//         selectedIcon={selicon} // tab选中图片
//         renderAsOriginal={true}    // 如果为false，只会显示纯色图片
//         onPress = {() => {
//           this.setState({
//             selectedTab:selectedTab,
//           });
//         }}
//         selected = { this.state.selectedTab === selectedTab}>
//         {this._renderComponent(this.state.selectedTab)}
//       </TabBarIOS.Item>
//     );
//   }

//   // 根据selectedTab 确定模块
//   _renderComponent(selectedTab){
//     if (selectedTab === 'home') {
//       return <Home navigator={this.props.navigator} />
//     } else if (selectedTab === 'shangmen') {
//       return <JZListView navigator={this.props.navigator} />
//     } else if (selectedTab === 'shangjia') {
//       return <JZListView navigator={this.props.navigator} />
//     }
//     else if (selectedTab === 'wode') {
//       return <JZListView navigator={this.props.navigator} />
//     }
//     else if (selectedTab === 'more') {
//       return <JZListView navigator={this.props.navigator} />
//     }
//   }
// }


export default class StartView extends Component {
  render() {
    return (
        <RootNavigator/>
    );
  }
}

