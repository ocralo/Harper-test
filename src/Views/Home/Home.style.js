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
		paddingBottom: 20,
		paddingLeft: 60,
		paddingRight: 60,
	},
	title: {
		fontSize: 30,
		textAlign: 'justify',
		fontWeight: 'bold',
		color: '#fff',
	},
	searchInput: {
		borderColor: '#fff',
		marginTop: 20,
	},
	bodyHome: {
		flex: 4,
		borderTopEndRadius: 25,
		borderTopLeftRadius: 25,
		backgroundColor: '#2b3948',
		paddingTop: 10,
	},
});
