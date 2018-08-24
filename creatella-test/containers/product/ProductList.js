import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import styles from './Style'

import { getBatchProduct } from 'Redux/reducer'

class ProductList extends Component {

  componentDidMount() {
    this.props.getBatchProduct()
  }

  _centToDollar(input) {
    return '$' + input / 100
  }

  _renderProduct = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.face}</Text>
      <Text>{this._centToDollar(item.price)}</Text>
    </View>
  )

  render() {
    return (
      <FlatList
        styles={styles.container}
        data={this.props.product}
        renderItem={this._renderProduct}
        keyExtractor={(item, index) => item.id}
      />
    )
  }

}

const mapStateToProps = state => {
  return {
    product: state.data
  }
}

const mapDispatchToProps = {
  getBatchProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);