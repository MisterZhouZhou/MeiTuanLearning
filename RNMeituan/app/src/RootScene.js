//import liraries
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'
import WebScene from './widget/WebScene'

import color from './widget/color'

const lightContentScenes = ['Home', 'Mine']

// create a component
export default class RootScene extends Component {
    constructor() {
        super()
        StatusBar.setBarStyle('light-content')
    }

    getCurrentRouteName(navigationState) {
      if (!navigationState) {
          return null;
      }
      const route = navigationState.routes[navigationState.index];
      // dive into nested navigators
      if (route.routes) {
          return this.getCurrentRouteName(route);
      }
      return route.routeName;
    }

    render() {
      return (
        <Navigator
          onNavigationStateChange={(prevState, currentState) => {
                const currentScene = this.getCurrentRouteName(currentState);
                const previousScene = this.getCurrentRouteName(prevState);
                if (previousScene !== currentScene) {
                    if (lightContentScenes.indexOf(currentScene) >= 0) {
                        StatusBar.setBarStyle('light-content')
                    } else {
                        StatusBar.setBarStyle('dark-content')
                    }
                }
            }
          }
        />
      );
    }
}

const Tab = TabNavigator({
    Home: {screen: HomeScene},
    Nearby: {screen: NearbyScene},
    Order: {screen: OrderScene},
    Mine: {screen: MineScene},
  },
  {
    tabBarOptions: {
    inactiveTintColor: '#979797',   // 未激活时tabbar上字体颜色
    activeTintColor: color.theme,  // 激活时tabbar上字体颜色
    style: {backgroundColor: '#fff'}, // tabbar背景颜色
    indicatorStyle: {height: 0},
    labelStyle: {margin: 0, fontSize: 11, marginTop: 3},
    tabStyle: {paddingBottom: 0, borderTopWidth: 0.5, borderTopColor: '#efefef'},
    showIcon: true
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true
  }
);

const Navigator = StackNavigator({
    Tab: { screen: Tab },
    Home: {screen: HomeScene},
    Nearby: {screen: NearbyScene},
    Web: { screen: WebScene },
    GroupPurchase: { screen: GroupPurchaseScene },
  }
);

