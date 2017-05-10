import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

var cardData = [{
  img : require('../../../../../Asserts/icon_homepage_entertainmentCategory.png'),
  text : '美食',
  link : 'http://3c.m.tmall.com'
},{
  img : require('../../../../../Asserts/icon_homepage_foottreatCategory.png'),
  text : '电影',
  link : 'http://3c.m.tmall.com'
},{
  img : require('../../../../../Asserts/icon_homepage_hotelCategory.png'),
  text : '酒店',
  link : 'http://3c.m.tmall.com'
},{
  img : require('../../../../../Asserts/icon_homepage_KTVCategory.png'),
  text : 'KTV',
  link : 'http://3c.m.tmall.com'
}

];

export default class JZMenuCard extends Component{
  render(){
    return(
       <View style = {styles.container}>
        <View style = {styles.boxtr}>
          {this.renderItems(cardData)}
        </View>
        <View style = {styles.boxtr}>
          {this.renderItems(cardData)}
        </View>
      </View>
    );
  }

  renderItems(data){
    return data.map(function(items,i){
      return (
        <View key={i} style = {styles.boxtd}>
          <Image source={items.img} style={styles.cardImg} />
          <Text style = {styles.cardText}>
            {items.text}
          </Text>
        </View>
      )
    });
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  boxtr:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop: 10,
    paddingBottom : 10,
    paddingLeft : 5,
    paddingRight: 5,
  },
  boxtd:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:3,
  },
  cardImg:{
    width: 40,
    height: 40,
  },
  cardText:{
    color:'#000',
    fontSize: 14,
    marginTop:10,
  },
});
