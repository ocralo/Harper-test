import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { Rating, Icon, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Movie.style';

// import components
import CardActor from '../../Components/CardActor/CardActor';

function Movie({ navigation }) {
	const [ratingNumber, setRatingNumber] = useState(3);
	const data = [
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
		<SafeAreaView style={styles.containerSafeArea}>
			<View style={styles.containerMovie}>
				<ImageBackground
					source={{
						uri:
							'https://image.tmdb.org/t/p/w500/g63KmFgqkvXu6WKS23V56hqEidh.jpg',
					}}
					style={styles.movieContainerImage}
					imageStyle={{
						borderBottomRightRadius: 30,
						borderBottomLeftRadius: 30,
					}}
				>
					<View style={styles.movieheader}>
						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<Icon name="arrow-left" type="font-awesome" color="#fff" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon name="heart-o" type="font-awesome" color="#fff" />
						</TouchableOpacity>
					</View>
				</ImageBackground>
				<View style={styles.movieBody}>
					<Text style={styles.movieTitle}>Holi BB</Text>
					<View style={styles.movieheader}>
						<Button
							buttonStyle={styles.buttonWatch}
							titleStyle={styles.buttonTitleWatch}
							title="Mirar ahora"
							type="solid"
						/>
						<Rating
							style={styles.rating}
							type="custom"
							ratingCount={5}
							startingValue={ratingNumber}
							imageSize={23}
							readonly={true}
							ratingBackgroundColor="#c8c7c8"
						/>
					</View>
					<Text style={styles.movieTextContent}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam aliquet luctus magna, ac feugiat lacus semper eget.
						Vestibulum feugiat metus eu lectus luctus laoreet. Praesent ac
						libero sed quam aliquam dictum sed et justo. Etiam suscipit
						eget neque vitae pretium. Fusce at enim pulvinar, pharetra
						risus quis, rutrum felis. Sed nec scelerisque magna.
					</Text>
					<FlatList
						contentContainerStyle={styles.actorList}
						data={data}
						renderItem={({ item }) => <CardActor title={item.title} />}
						horizontal={true}
					/>
					<View style={styles.primaryDataContent}>
						<View style={styles.primaryData}>
							<Text style={styles.primaryDataTitle}>Studio</Text>
							<Text ellipsizeMode="tail" style={styles.primaryDataText}>
								Warner, Bros
							</Text>
						</View>
						<View style={styles.primaryData}>
							<Text style={styles.primaryDataTitle}>Genero</Text>
							<Text ellipsizeMode="tail" style={styles.primaryDataText}>
								Warner, Bros
							</Text>
						</View>
						<View style={styles.primaryData}>
							<Text style={styles.primaryDataTitle}>Lanzamiento</Text>
							<Text ellipsizeMode="tail" style={styles.primaryDataText}>
								Warner, Bross
							</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
Movie.propTypes = { navigation: PropTypes.object };

Movie.defaultProps = {};

export default Movie;
