/*
 * 源码来自https://github.com/hugohua/react-native-demo，有点小修改
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
var TimerMixin = require('react-timer-mixin');

//获取可视窗口的宽高
var { width, height, scale } = Dimensions.get('window');

var itemHeight = 100,
picFormat = '_640x200xzq75.jpg';
    //mui 3.0 slider 规范
    //TODO 这种方式不够科学，目前只是实现效果，后续请@遂宇做优化吧
    //IP6
if(height === 375){
    itemHeight = 117;
    picFormat = '_750x234xzq75.jpg';
}else if(height === 414){ //IP6 Plug
    itemHeight = 99.6;
    picFormat = '_1080x260xzq75.jpg';
}

module.exports = React.createClass({
    mixins: [TimerMixin],
    //默认值
    getDefaultProps() {
        return {
            width: width,
            indicatorColor: '#ffffff',
            inactiveIndicatorColor: '#ffffff',
            duration : 5000,
            api : 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550'
        }
    },

    //初始化用于状态转换的值
    getInitialState() {
        return {
            currentPage: 0,
            dataSource : []
        }
    },

    //拉取投放的数据
    fetchData() {
        var me = this;
        fetch(me.props.api)
            .then((response) => response.json())
            .then((responseData) => {
                me.setState({
                    dataSource: responseData.data
                });
          })
          .done(function(){
            me._startTimer();
          });
    },

    /**4.通过定时器实现自动播放轮播图 */
    _startTimer(){
      var scrollView = this.refs.scrollView;
      var length = this.state.dataSource.length;
      this.timer = setInterval(()=>{
         //4.1 设置圆点
         let activePage = 0;
         //4.2判断
         if(this.state.currentPage+1>=length){
           activePage = 0;
         }else{
           activePage = this.state.currentPage+1;
         }
         //4.3 更新状态机
         this.setState({currentPage:activePage});
         //4.4 让scrollview 滚动起来
         let offsetX = activePage * this.props.width;
         scrollView.scrollTo({x: offsetX, y: 0, animated: true});
        },
         this.props.duration
       );
    },

    componentDidMount() {
        this.fetchData();
    },

    getImage:function(url): string{
        // return ('http://p0.meituan.net/200.120/deal/667c7aa92a0c04779e266bbfa7d77c64316233.jpg');
        if (url.search('https:') === -1) {
            return ('https:' + url);
        }else{
            return (url);
        }
    },

    //渲染单个图片
    renderItems(data) {
        var weakself = this;
        return data.map(function(item,i){
            var imgurl = weakself.getImage(item.img);
            return(
                <Image resizeMode='cover' key={i} style={{width: width,height:itemHeight}} source={{uri: imgurl + picFormat}}/>
            );
        })
    },

    render() {
        var data = this.state.dataSource
        return (
            <View style={styles.container}>
                <ScrollView
                  ref='scrollView'
                  //水平方向
                  horizontal={true}
                  //当值为true时显示滚动条
                  showsHorizontalScrollIndicator={false}
                  //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上
                  pagingEnabled={true}
                  //滑动完一贞
                  onMomentumScrollEnd={(e)=>{this._onAnimationEnd(e)}}
                  //开始拖拽
                  onScrollBeginDrag={()=>{this._onScrollBeginDrag()}}
                  //结束拖拽
                  onScrollEndDrag={()=>{this._onScrollEndDrag()}}
                >
                  {this.renderItems(data)}
                </ScrollView>
                {this.renderPageIndicator()}
            </View>
            );
    },

    renderPageIndicator() {
        var indicators = [],
            style;

        for (var i=0; i< this.state.dataSource.length; i++) {
            style = i === this.state.activePage ? { color: this.props.indicatorColor,opacity : 1 } : { color: this.props.inactiveIndicatorColor,opacity : 0.3 };
            indicators.push(<Text key={i} style={[style, {fontSize: 32}]}>&bull;</Text>)
        }

        return (
            <View style={styles.pageIndicator}>
            {indicators}
            </View>
        )
    },

    /**开始拖拽 */
    _onScrollBeginDrag(){
      //两种清除方式 都是可以的没有区别
      // this.timer && clearInterval(this.timer);
      this.timer && clearTimeout(this.timer);
    },

    /**停止拖拽 */
    _onScrollEndDrag(){
      this.timer &&this._startTimer();
    },

    /**2.手动滑动分页实现 */
    _onAnimationEnd(e) {
     //求出偏移量
     let offsetX = e.nativeEvent.contentOffset.x;
     //求出当前页数
     let pageIndex = Math.floor(offsetX / this.props.width);
     //更改状态机
     this.setState({ currentPage: pageIndex });
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    pageIndicator: {
        position : 'absolute',
        backgroundColor : 'transparent',
        left : 12,
        bottom : -10,
        flexDirection: 'row'
    }
});
