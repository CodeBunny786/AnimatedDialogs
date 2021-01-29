import React, { Component } from 'react'
import { Text, ScrollView, View,Alert, TouchableOpacity } from 'react-native'

import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

// Styles
import styles from './styles'

export default class Main extends Component {
	constructor(props, context) {
		super(props, context)

	}

	/*--------------------------------------------------STATES-------------------------------------------------- */

	state = {
		showModel: true,
		roles: ''
	}
	/*--------------------------------------------------PROPS-------------------------------------------------- */
	static defaultProps = {
		item: {},
		serviceItemSelected: {},
		infoPress: () => { }
	}
	static propTypes = {
		item: PropTypes.object,
		infoPress: PropTypes.func
	}
	/*--------------------------------------------------LIFECYCLE-------------------------------------------------- */
	componentDidMount() {

  }
	/*--------------------------------------------------EVENTS-------------------------------------------------- */

	/*--------------------------------------------------ACTIONS-------------------------------------------------- */

	/*--------------------------------------------------RENDER-------------------------------------------------- */

	render() {
		return <View style={styles.infoContainer}>
			< Modal isVisible={this.state.showModel}
				onBackdropPress={() => this.props.closeServices()} >
				<View style={styles.modelContainer}>
					{/* <View style={styles.horizontalView}>

						<Text style={styles.mainTitleStyle}>{'Choose Role'.toUpperCase()}</Text>
					</View> */}
				</View>
			</Modal >
		</View >

	}
}