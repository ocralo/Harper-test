import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerSafeArea: {
		flex: 1,
	},
	containerMovie: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#2b3948',
	},
	movieContainerImage: {
		flex: 2,
		paddingRight: 30,
		paddingLeft: 30,
	},
	movieImage: {
		height: 300,
		width: '100%',
		resizeMode: 'cover',
	},
	movieheader: {
		marginTop: 20,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	movieBody: { flex: 3, padding: 30 },
	movieTitle: {
		fontSize: 30,
		textAlign: 'justify',
		fontWeight: 'bold',
		color: '#fff',
	},
	rating: {
		alignItems: 'flex-start',
		backgroundColor: 'transparent',
		paddingVertical: 10,
	},
	buttonWatch: {
		borderRadius: 20,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '#6b747f',
	},
	buttonTitleWatch: { fontWeight: 'bold' },
	movieTextContent: { marginTop: 10, lineHeight: 20, color: '#aaaaaa' },
	actorList: { marginTop: 20 },
	primaryDataContent: { flex: 4, width: 280 },
	primaryData: { flexDirection: 'row', justifyContent: 'space-between' },
	primaryDataTitle: { fontWeight: 'bold', color: '#fff' },
	primaryDataText: { color: '#aaaaaa', textAlign: 'left', width: 160 },
});
