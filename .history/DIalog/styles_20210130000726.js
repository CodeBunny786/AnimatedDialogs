import { snakeCase } from 'lodash'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    infoContainer: {
        flex: 1,
        justifyContent: 'center',
   

    },
    modelContainer: {
        height: 400,
        width: '100%',
        borderRadius:12,
        backgroundColor: '#fff'

    },
    header: {

        height: 60,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
        color: '#fff'
    },
    footContainer: {

        height: 60, width: '100%',
        backgroundColor:'green',justifyContent:'center'
    },
    succesStyle: {
        color: 'blue',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        padding:10

    },
    descriptionStyle:{

        color: 'grey',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        padding:10

    },
    btnText:{

        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        // padding:10
    }




})
