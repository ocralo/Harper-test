import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Home.style';

// import components
import RowItem from '../../Components/RowItem/RowItem';
import Alert from '../../Components/Alert/Alert';

//importacion de librerias externas
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//importacion de reducer de redux
import {
	getMoviesError,
	getMoviesPending,
	getMovies,
	getMoviesRegion,
} from '../../Redux/Reducer/index';
import { fetchMovies, fetchMoviesRegion } from './../../Requests/Requests';

const Home = ({
	navigation,
	fetchMovies,
	fetchMoviesRegion,
	movies,
	moviesRegion,
	error,
}) => {
	const [search, setSearch] = useState('');
	const updateSearch = (searchinput) => {
		setSearch(searchinput);
	};

	useEffect(() => {
		fetchMovies('https://api.themoviedb.org/3/discover/movie');
		fetchMoviesRegion('https://api.themoviedb.org/3/discover/movie', 'co');
	}, [fetchMovies]);
	return (
		<SafeAreaView style={styles.containerSafeArea}>
			<ScrollView style={styles.containerHome}>
				{error && <Alert />}
				<View style={styles.containerHeader}>
					<Text style={styles.title}>Hola, ¿qué deseas ver hoy?</Text>
					<SearchBar
						round={true}
						showCancel={true}
						containerStyle={styles.searchInputContent}
						inputContainerStyle={styles.searchInput}
						placeholder="Search"
						onChangeText={updateSearch}
						lightTheme={true}
						value={search}
					/>
				</View>
				<View style={styles.bodyHome}>
					<>
						<RowItem navigation={navigation} data={movies}></RowItem>
						<RowItem
							title={'LOS MEJORES'}
							navigation={navigation}
							data={moviesRegion}
						></RowItem>
					</>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

Home.propTypes = { navigation: PropTypes.object };

Home.defaultProps = {};

/**
 * trae los estados de la storage
 * @param {*} state
 */
const mapStateToProps = (state) => ({
	error: getMoviesError(state),
	movies: getMovies(state),
	moviesRegion: getMoviesRegion(state),
	pending: getMoviesPending(state),
});

/**
 * metodo para emitir acciones, para modificar el estado
 * de la storage
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchMovies: fetchMovies,
			fetchMoviesRegion: fetchMoviesRegion,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
