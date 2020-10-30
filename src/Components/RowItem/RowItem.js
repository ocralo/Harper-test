import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './RowItem.style';

// import components
import CardMovie from '../CardMovie/CardMovie';

const RowItem = ({ title, data, navigation }) => {
	const [search, setSearch] = useState('');
	const updateSearch = (search) => {
		setSearch({ search });
	};
	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'First Item',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Second Item',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Third Item',
		},
	];
	return (
		<View style={styles.recomendation}>
			<View style={styles.recomendationHeader}>
				<Text style={styles.titleRecomendation}>{title}</Text>
				<TouchableOpacity>
					<Text style={styles.seeAll}>Ver todo</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				style={styles.titleRecomendation}
				data={data}
				renderItem={({ item }) => (
					<CardMovie title={item.title} navigation={navigation} />
				)}
				horizontal={true}
			/>
		</View>
	);
};

RowItem.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	navigation: PropTypes.object,
};

RowItem.defaultProps = {
	title: 'RECOMENDADO PARA TI',
	data: [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'First Item',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Second Item',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Third Item',
		},
	],
};

export default RowItem;
