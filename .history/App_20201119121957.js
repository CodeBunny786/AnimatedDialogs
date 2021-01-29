import React, { Component } from 'react'
import { Text, ScrollView, Alert, TouchableOpacity } from 'react-native'
import ResponseCodes from '../../../../Services/ResponseCodes'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import API from '../../../../Services/Services'
import RoundedButton from '../../../../Components/RoundedButton'
import ImageButton from '../../../../Components/ImageButton'
// Styles
import styles from './styles'
import { Images } from '../../../../Themes'
import { View } from 'react-native-animatable'
// import ServiceOptionCell from '../Items/ServiceOptionCell'
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
		API.getRoles().then(response => {

			if (response.code == ResponseCodes.STATUS_OK) {
				this.setState({ roles: response.result })
			} else {
				Alert.alert('rosles are ' + response.code)

			}


		})
	}
	/*--------------------------------------------------EVENTS-------------------------------------------------- */

	/*--------------------------------------------------ACTIONS-------------------------------------------------- */
	closeView = () => {

		this.setState({
			showModel: false
		}, () => {
			this.props.closeServices(false)
		});

	}

	onServiceConfirmPress = () => {


	}
	onConfirmPress = () => {
		if (this.state.serviceItemSelected) {
			this.setState({ showModel: false }, () => {

				this.props.closeServices(false)
			})
		} else {
			Alert.alert('Please Select Minimum One Service')
		}
	}
	serviceSelect = (item) => {

		this.setState({ serviceItemSelected: item }, () => {
			this.props.selectedService(item)
		})
		// this.setState({ serviceItemSelected: item })
		// this.props.selectedService(item)
	}
	onItemPress = (item) => {
		this.props.onItemSelect && this.props.onItemSelect(item)
	}
	/*--------------------------------------------------RENDER-------------------------------------------------- */
	renderItem = ({ item }) => {
		// return null
		return (
			<TouchableOpacity onPress={() => this.onItemPress(item)}>
				<View style={styles.lineStyle} key={item}>
					<Text style={styles.textStyleItem}>
						{item.title}
					</Text>
				</View>
			</TouchableOpacity>)
	}

	renderBody = () => {
		return <View style={styles.bodyContainer}>
			<ScrollView style={styles.listContainer} contentContainerStyle={styles.listContainerContent}>
				{this.state.roles ? this.state.roles.map((item, index) => {
					return this.renderItem({ item, index })
				}) : null}
			</ScrollView>
		</View>
	}

	renderFooter = () => {
		return <View style={styles.confirmContainer}>
			<RoundedButton text={'CONFIRM'} disabled={this.state.serviceItemSelected ? false : true} style={styles.confirm} textStyle={styles.confirmText} onPress={this.onConfirmPress} />
		</View>
	}
	render() {
		return <View style={styles.infoContainer}>
			< Modal isVisible={this.state.showModel}
				onBackdropPress={() => this.props.closeServices()} >
				<View style={styles.modelContainer}>
					<View style={styles.horizontalView}>
						{/* <ImageButton source={Images.icClose} resizeMode='contain' style={styles.crossImageStyle} onPress={() => this.closeView()}></ImageButton> */}
						<Text style={styles.mainTitleStyle}>{'Choose Role'.toUpperCase()}</Text>
					</View>
					{this.renderBody()}
					{/* {this.renderFooter()} */}
				</View>
			</Modal >
		</View >

	}
}