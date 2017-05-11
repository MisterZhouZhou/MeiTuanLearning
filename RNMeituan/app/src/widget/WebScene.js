import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, InteractionManager } from 'react-native';
import color from './color'

export default class WebScene extends Component {
  static navigationOptions = {
    header: (navigation) => ({
      style: { backgroundColor: color.theme },
      title: navigation.state.params.title,
    }),
  }

  constructor(props: Object) {
    super(props)
    this.state = {
        source: {uri: this.props.navigation.state.params.url}
    }
  }

  componentWillMount() {
     this.props.navigation.setParams({ title: '加载中'})
  }

  render() {
    return (
      <View style={styles.container}>
          <WebView
              ref='webView'
              automaticallyAdjustContentInsets={false}
              style={styles.webView}
              source={this.state.source}
              onLoadEnd={(e) => this.onLoadEnd(e)}
              scalesPageToFit={true}
          />
      </View>
    );
  }

  onLoadEnd(e: any) {
    if (e.nativeEvent.title.length > 0) {
        this.props.navigation.setParams({ title: e.nativeEvent.title })
    }
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});
