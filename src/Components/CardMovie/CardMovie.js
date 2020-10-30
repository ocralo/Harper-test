import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Image, Rating } from 'react-native-elements';

//import styles
import style from './CardMovies.style';

const CardMovies = ({ idMovie, title, ratingNumber, imageUrl, navigation }) => {
	return (
		<TouchableOpacity
			style={style.card}
			onPress={() => navigation.navigate('Movie', { idMovie })}
		>
			<Image
				source={{
					uri: `https://image.tmdb.org/t/p/w500${imageUrl}`,
				}}
				style={style.cardImage}
				PlaceholderContent={<ActivityIndicator />}
			/>
			<Text numberOfLines={2} style={style.cardTitle}>
				{title}
			</Text>
			<Rating
				style={style.rating}
				type="custom"
				ratingImage={require('./../../Assets/Img/star-black.png')}
				ratingBackgroundColor='#FFE200'
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
	idMovie: PropTypes.number,
	title: PropTypes.string,
	ratingNumber: PropTypes.number,
	imageUrl: PropTypes.string,
};

CardMovies.defaultProps = {
	idMovie: 697064,
	title: 'Avengers: Endgame',
	ratingNumber: 3,
	imageUrl: 'https://image.tmdb.org/t/p/w500/g63KmFgqkvXu6WKS23V56hqEidh.jpg',
};

export default CardMovies;
