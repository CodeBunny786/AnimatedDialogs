import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Dialog  from "./Dialog";
// Styles
import styles from './styles'

export default class Main extends Component {
  constructor(props, context) {
    super(props, context)

  }


  render() {
    return <View style={styles.mainContainer}>
      <Dialog />
    </View>
  }
}