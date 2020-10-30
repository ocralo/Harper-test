import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';
import { Avatar, Rating, AirbnbRating } from 'react-native-elements';

//import styles
import style from './CardActor.style';

const CardActor = ({ title, ratingNumber, imageUrl }) => {
	const ratingCompleted = (rating) => {
		console.log('Rating is: ' + rating);
	};
	return (
		<View style={style.cardActor}>
			<Avatar
				rounded
				size="medium"
				source={{
					uri:
						'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
				}}
			/>
			<Text style={style.cardTitle}>{title}</Text>
		</View>
	);
};

CardActor.propTypes = {
	title: PropTypes.string,
	ratingNumber: PropTypes.number,
	imageUrl: PropTypes.string,
};

CardActor.defaultProps = {
	title: 'Jason Momoa',
	ratingNumber: 3,
	imageUrl: 'https://image.tmdb.org/t/p/w500/g63KmFgqkvXu6WKS23V56hqEidh.jpg',
};

export default CardActor;
