import React, { useState, useEffect } from 'react';
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

//importacion de librerias externas
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//importacion de reducer de redux
import {
	getMoviesError,
	getMoviesPending,
	getMoviesEspecific,
	getMovieCast,
} from './../../Redux/Reducer/index';

//importacion de componentes
import {
	fetchEspecificMovies,
	fetchMovieCast,
} from './../../Requests/Requests';

function Movie({ navigation, route, fetchMovie, fetchMovieCast, movie, cast }) {
	const [ratingNumber] = useState(3);

	const { idMovie } = route.params;

	useEffect(() => {
		fetchMovie('https://api.themoviedb.org/3/movie/', idMovie);
		fetchMovieCast(`http://api.themoviedb.org/3/movie/${idMovie}/casts`);
	}, [fetchMovie, fetchMovieCast, idMovie]);

	return (
		<SafeAreaView style={styles.containerSafeArea}>
			{/* console.log(cast) */}
			<View style={styles.containerMovie}>
				<ImageBackground
					source={{
						uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
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
					<Text style={styles.movieTitle}>{movie.title}</Text>
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
							ratingImage={require('./../../Assets/Img/star-black.png')}
							ratingBackgroundColor="#FFE200"
							ratingCount={5}
							startingValue={movie.vote_average}
							imageSize={23}
							readonly={true}
							ratingBackgroundColor="#c8c7c8"
						/>
					</View>
					<Text style={styles.movieTextContent}>{movie.overview}</Text>
					<FlatList
						contentContainerStyle={styles.actorList}
						data={cast}
						renderItem={({ item }) => (
							<CardActor
								title={item.name}
								imageUrl={item.profile_path}
							/>
						)}
						horizontal={true}
						keyExtractor={(item) => `list-item-${item.id}`}
					/>
					<View style={styles.primaryDataContent}>
						<View style={styles.primaryData}>
							<Text style={styles.primaryDataTitle}>Studio</Text>
							<Text
								numberOfLines={1}
								ellipsizeMode="tail"
								style={styles.primaryDataText}
							>
								{movie.production_companies[0]?.name}
							</Text>
						</View>
						<View style={styles.primaryData}>
							<Text style={styles.primaryDataTitle}>Genero</Text>
							<Text
								numberOfLines={1}
								ellipsizeMode="tail"
								style={styles.primaryDataText}
							>
								{movie.genres[0].name}
							</Text>
						</View>
						<View style={styles.primaryData}>
							<Text style={styles.primaryDataTitle}>Lanzamiento</Text>
							<Text
								numberOfLines={1}
								ellipsizeMode="tail"
								style={styles.primaryDataText}
							>
								{movie.release_date?.replace(/-/g, '/')}
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

/**
 * trae los estados de la storage
 * @param {*} state
 */
const mapStateToProps = (state) => ({
	error: getMoviesError(state),
	movie: getMoviesEspecific(state),
	pending: getMoviesPending(state),
	cast: getMovieCast(state),
});

/**
 * metodo para emitir acciones, para modificar el estado
 * de la storage
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchMovie: fetchEspecificMovies,
			fetchMovieCast: fetchMovieCast,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
