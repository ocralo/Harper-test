import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerSafeArea: {
		flex: 1,
	},
	containerHome: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#5ba0d2',
	},
	containerHeader: {
		flex: 1,
		paddingTop: 20,
		marginBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,

	},
	title: {
		fontSize: 30,
		textAlign: 'justify',
		fontWeight: 'bold',
		color: '#fff',
		paddingLeft: 30,
		paddingRight: 30,
	},
	searchInputContent: {
		borderWidth: 0,
		borderColor: 'transparent',
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: 'transparent',
		paddingLeft: 0,
		paddingRight: 0,
		paddingTop: 0,
		paddingBottom: 0,
		borderRadius: 20,
	},
	searchInput: {
		borderWidth: 0,
		borderRadius: 20,
	},
	bodyHome: {
		flex: 2,
		borderTopEndRadius: 25,
		borderTopLeftRadius: 25,
		backgroundColor: '#2b3948',
		paddingTop: 10,
	},
});