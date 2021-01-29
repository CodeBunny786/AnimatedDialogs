import React, { Component } from 'react'
import { Text, ScrollView, View, Alert, TouchableOpacity, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'
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
    renderBody = () => {
        return <View style={styles.bodyContainer}>
            <Text style={styles.succesStyle}>Succes</Text>
            <Text style={styles.descriptionStyle} >Congrats you have done it  </Text>
        </View>
    }
    renderfooter = () => {
        return <View style={styles.footContainer}>
            <Text style={styles.btnText}>Congrats you have done it  </Text>
        </View>
    }
    renderSeprator = () => {
        return <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
        />
    }

    render() {
        return <View 
            style={styles.infoContainer}
        >
  {/* <Modal isVisible={isModalVisible}> */}
                <View style={styles.modelContainer}>
                    <ImageBackground

                        resizeMode='contain'
                        style={{
                            flex: 1,
                            height: 200,
                            width: 200,
                            padding: 10,
                            resizeMode: "cover",
                            justifyContent: "center",
                            alignSelf: 'center'


                        }}
                        source={{ uri: 'https://www.pngrepo.com/png/55513/180/medal.png' }}>

                    </ImageBackground>
                    {this.renderBody()}
                    {this.renderSeprator()}
                    {this.renderfooter()}
                </View>
                {/* </Modal> */}
        </View  >

    }
}