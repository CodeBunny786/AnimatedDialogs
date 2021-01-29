import { StyleSheet } from 'react-native'
import { ApplicationStyles, scale, Colors, Fonts } from '../../../../Themes'
export default StyleSheet.create({
	...ApplicationStyles.screen,
	infoContainer: {
	flex:1,

	},
	infoImage: {
		width: scale(20),
		height: scale(20),
		margin: scale(5)
	},
	confirm: {
		marginTop: scale(30),
		marginBottom: scale(25),
		width: scale(124),
		height: scale(248),
		alignSelf: 'center',
		backgroundColor: Colors.darkSkyBlue,
		borderRadius: 4,
		shadowColor: Colors.darkSkyBlue20,
		shadowOffset: {
		  width: 0,
		  height: 3
		},
		shadowRadius: 6,
		shadowOpacity: 1
	},
	modelContainer: {
		width: scale(300),
		height: scale(244),
		alignSelf:'center',
		backgroundColor: Colors.white
	},
	horizontalView: {

		height: scale(40),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:Colors.darkSkyBlue

	},
	crossImageStyle: {
		width: scale(20),
		height: scale(20),
		margin: scale(5),
		marginRight:scale(20),
		position: 'absolute',
		top: 10,
		right: 20

	},
	mainTitleStyle: {
		...Fonts.style(Fonts.type.roboto, 14, 'bold'),
		color: Colors.greyishBrown,
		alignSelf: 'center',

		width: '100%',
		position: 'absolute',
		top: 15,
		right: -100
	},
	bodyContainer:{

		flex:1,
		marginTop:scale(20),
	},
	confirmContainer:{

		marginTop:scale(5)
	},
	textStyleItem:{

		...Fonts.style(Fonts.type.roboto, 14, 'bold'),
		color: Colors.greyishBrown,
		marginVertical:scale(5),
		marginHorizontal:scale(30),
		textAlign:'center'
	},
	lineStyle:{

		borderBottomColor: 'grey',
		borderBottomWidth: .5,
		marginVertical:scale(5),
	},
	textStyleItem:{

		...Fonts.style(Fonts.type.roboto, 14, 'bold'),
		color: Colors.greyishBrown,
		marginVertical:scale(5),
		marginHorizontal:scale(30),
		textAlign:'center'
	},
	lineStyle:{

		borderBottomColor: 'grey',
		borderBottomWidth: .5,
		marginVertical:scale(5),
		height:scale(40),
		
	}




})
