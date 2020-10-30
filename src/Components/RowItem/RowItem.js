import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './RowItem.style';

// import components
import CardMovie from '../CardMovie/CardMovie';

const RowItem = ({ title, data, navigation, movies }) => {
	return (
		<View style={styles.recomendation}>
			<View style={styles.recomendationHeader}>
				<Text style={styles.titleRecomendation}>{title}</Text>
				<TouchableOpacity>
					<Text style={styles.seeAll}>Ver todo</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				ListFooterComponentStyle={styles.listRecomendation}
				data={data}
				renderItem={({ item }) => {
					const { id, title, vote_average, poster_path } = item;
					return (
						<CardMovie
							title={title}
							ratingNumber={vote_average}
							imageUrl={poster_path}
							navigation={navigation}
							idMovie={id}
						/>
					);
				}}
				keyExtractor={(item) => `list-item-${item.id}`}
				horizontal={true}
			/>
		</View>
	);
};

RowItem.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	navigation: PropTypes.object,
	movies: PropTypes.array,
};

RowItem.defaultProps = {
	title: 'RECOMENDADO PARA TI',
	data: [
		{
			adult: false,
			backdrop_path: '/7WKIOXJa2JjHygE8Yta3uaCv6GC.jpg',
			genre_ids: [28],
			id: 697064,
			original_language: 'en',
			original_title: 'Beckman',
			overview:
				'A contract killer, becomes the reverend of a LA church, until a cult leader and his minions kidnap his daughter. Blinded by vengeance, he cuts a bloody path across the city. The only thing that can stop him is his newfound faith.',
			popularity: 546.091,
			poster_path: '/z0r3YjyJSLqf6Hz0rbBAnEhNXQ7.jpg',
			release_date: '2020-09-10',
			title: 'Beckman',
			video: false,
			vote_average: 4.8,
			vote_count: 17,
		},
	],
};

export default RowItem;
