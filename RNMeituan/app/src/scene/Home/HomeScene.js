import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'
import {Paragraph,Heading2} from '../../widget/Text'
import {NavigationItem, color, RefreshState, RefreshListView, SpacingView} from '../../widget'
import { screen, system } from '../../common'

import api from '../../api'

import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'

export default class HomeScene extends Component {
  static navigationOptions = {
    title: '团购',
    header: (navigation) => ({
      style: { backgroundColor: color.theme },
      // titleStyle: ShareStyles.stackNavigatorHeaderTitle,
      title:(<TouchableOpacity style={styles.searchBar}>
              <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon}  />
              <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
          ),
      left: (<NavigationItem title='福州' titleStyle={{color: 'white'}}
                onPress={() => {

                }}
            />),
      right: (<NavigationItem
                icon={require('../../img/Home/icon_navigationItem_message_white@2x.png')}
                onPress={() => {

                }}
             />),
    }),

    tabBar: {
      label: '团购',
      icon: ({ focused, tintColor }) => {
        if (focused) return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_homepage_selected@2x@2x.png')}/>);
        else return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_homepage@2x.png')}/>);
      }
    }
  }

  constructor(props: Object) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
        discounts: [],
        dataSource: ds.cloneWithRows([]),
    }
  }

  componentDidMount() {
    this.refs.listView.startHeaderRefreshing()
  }

  requestData() {
    this.requestDiscount()
    this.requestRecommend()
  }

  onMenuSelected(index: number) {
    alert(index)
  }

  loadMenuInfos() {
    return api.menuInfo
  }

  onGridSelected(index: number) {
        let discount = this.state.discounts[index]
        if (discount.type == 1) {
            StatusBar.setBarStyle('default', false)
            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('Web', { url: url })
        }
    }

  requestRecommend() {
        fetch(api.recommend)
            .then((response) => response.json())
            .then((json) => {
                let dataList = json.data.map(
                    (info) => {
                        return {
                            id: info.id,
                            imageUrl: info.squareimgurl,
                            title: info.mname,
                            subtitle: `[${info.range}]${info.title}`,
                            price: info.price
                        }
                    }
                )

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                })
                setTimeout(() => {
                    this.refs.listView.endRefreshing(RefreshState.NoMoreData)
                }, 500);
            })
            .catch((error) => {
                this.refs.listView.endRefreshing(RefreshState.Failure)
            })
    }

    requestDiscount() {
        fetch(api.discount)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({ discounts: json.data })
            })
            .catch((error) => {
                alert(error)
            })
    }

  render(){
    return(
      <View style={styles.container}>
        <RefreshListView
          ref='listView'
          dataSource={this.state.dataSource}
          renderHeader={() => this.renderHeader()}
          renderRow={(rowData) =>this.renderCell(rowData)}
          onHeaderRefresh={() => this.requestData()}
          showFootMinNumber={4} //当达到4条数据时才显示底部刷新状态
        />
      </View>
    );
  }

  renderHeader() {
    return (
        <View style={{flex:1}}>
            <HomeMenuView menuInfos={this.loadMenuInfos()} onMenuSelected={(index) => this.onMenuSelected(index)} />
            <SpacingView />
            <HomeGridView infos={this.state.discounts} onGridSelected={(index) => this.onGridSelected(index)} />
            <SpacingView />
            <View style={styles.recommendHeader}>
                    <Heading2>猜你喜欢</Heading2>
                </View>
        </View>
    )
  }

  renderCell(rowData) {
    return (
        <GroupPurchaseCell
                  info={rowData}
                  onPress={() => {
                      StatusBar.setBarStyle('default', false)
                      this.props.navigation.navigate('GroupPurchase', { info: rowData })
                  }}
              />
    )
  }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});
