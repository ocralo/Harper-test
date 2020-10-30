import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	card: {
		width: 140,
		alignItems: 'flex-start',
		textAlign: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		margin: 10,
	},
	cardTitle: {
		fontSize: 17,
		marginTop: 10,
		color: '#fff',
		height: 45,
	},
	cardImage: {
		width: 120,
		height: 160,
		borderRadius: 20,
		resizeMode: 'cover',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	rating: {
		alignItems: 'flex-start',
		backgroundColor: 'transparent',
		paddingVertical: 10,
	},
});
