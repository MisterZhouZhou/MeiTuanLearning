import { StackNavigator, TabNavigator} from 'react-navigation'

import JZListView from './Home/view/JZListView'
import Home  from './Home/Home'
import ShangMen  from './ShangMen/ShangMen'
import ShangJia  from './ShangJia/ShangJia'
import Mine  from './Mine/Mine'
import More  from './More/More'

import JZWebView from './Home/view/JZWebView'

// 底部分栏
const TabHomeNavigator = TabNavigator({
  SYTab: {screen: Home},
  SMTab: {screen: ShangMen},
  SJTab: {screen: ShangJia},
  WDTab: {screen: Mine},
  GDTab: {screen: More},
},
{ tabBarOptions: {
    inactiveTintColor: '#888',   // 未激活时tabbar上字体颜色
    activeTintColor: 'rgb(53,184,174)',  // 激活时tabbar上字体颜色
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
});

export const RootNavigator = StackNavigator({
  Home: { screen: TabHomeNavigator },
  WebView: {screen:JZWebView},
});
