import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar } from 'react-native';

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import api from '../../api'
import { color, DetailCell, RefreshListView, RefreshState, SpacingView } from '../../widget'

import OrderMenuItem from './OrderMenuItem'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'


export default class OrderScene extends Component {
  static navigationOptions = {
        header:(navigation) => ({
          title: '订单',
          style: { backgroundColor: 'white' },
        }),
        tabBar: {
          label: '订单',
          icon: ({ focused, tintColor }) => {
            if (focused) return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_order_selected@2x.png')}/>);
            else return (<Image style={{width:20,height:20}} source={require('../../img/tabbar/pfb_tabbar_order@2x.png')}/>);
          }
        }
  }
  constructor(props: Object) {
        super(props)

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefreshing();
    }

    requestData() {
        fetch(api.recommend)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));

                let dataList = json.data.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                })

                // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
                dataList.sort(() => { return 0.5 - Math.random() })

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

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <GroupPurchaseCell
                            info={rowData}
                            onPress={() => {
                                StatusBar.setBarStyle('default', false)
                                this.props.navigation.navigate('GroupPurchase', { info: rowData })
                            }}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={styles.container}>
                <DetailCell title='我的订单' subtitle='全部订单' style={{ height: 38 }} />
                <View style={styles.itemContainer}>
                    <OrderMenuItem title='待付款' icon={require('../../img/Order/order_tab_need_pay@2x.png')} />
                    <OrderMenuItem title='待使用' icon={require('../../img/Order/order_tab_need_use@2x.png')} />
                    <OrderMenuItem title='待评价' icon={require('../../img/Order/order_tab_need_review@2x.png')} />
                    <OrderMenuItem title='退款/售后' icon={require('../../img/Order/order_tab_needoffer_aftersale@2x.png')} />
                </View>
                <SpacingView />
                <DetailCell title='我的收藏' subtitle='查看全部' style={{ height: 38 }} />
            </View>
        )
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
    },
});

