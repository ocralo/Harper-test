import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Image, Rating } from 'react-native-elements';

//import styles
import style from './CardMovies.style';

const CardMovies = ({ title, ratingNumber, imageUrl, navigation }) => {
	const ratingCompleted = (rating) => {
		console.log('Rating is: ' + rating);
	};
	return (
		<TouchableOpacity
			style={style.card}
			onPress={() => navigation.navigate('Movie')}
		>
			<Image
				source={{
					uri: imageUrl,
				}}
				style={style.cardImage}
				PlaceholderContent={<ActivityIndicator />}
			/>
			<Text style={style.cardTitle}>{title}</Text>
			<Rating
				style={style.rating}
				type="custom"
				ratingCount={5}
				startingValue={ratingNumber}
				imageSize={23}
				readonly={true}
				ratingBackgroundColor="#c8c7c8"
			/>
		</TouchableOpacity>
	);
};

CardMovies.propTypes = {
	title: PropTypes.string,
	ratingNumber: PropTypes.number,
	imageUrl: PropTypes.string,
};

CardMovies.defaultProps = {
	title: 'Avengers: Endgame',
	ratingNumber: 3,
	imageUrl: 'https://image.tmdb.org/t/p/w500/g63KmFgqkvXu6WKS23V56hqEidh.jpg',
};

export default CardMovies;
