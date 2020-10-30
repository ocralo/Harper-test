//importacion de librerias externas
import * as axios from 'axios';

//importacion de acciones de redux
import {
	fetchMoviesPending,
	fetchMoviesSuccess,
	fetchMoviesError,
	/*  */
	fetchMoviesPagePending,
	fetchMoviesPageSuccess,
	fetchMoviesPageError,
	/*  */
	fetchSearchMoviesPending,
	fetchSearchMoviesSuccess,
	fetchSearchMoviesError,
	/*  */
	fetchSearchMoviesPagePending,
	fetchSearchMoviesPageSuccess,
	fetchSearchMoviesPageError,
	/*  */
	fetchEspecificMoviesPending,
	fetchEspecificMoviesSuccess,
	fetchEspecificMoviesError,
	/*  */
	fetchMoviesPendingRegion,
	fetchMoviesSuccessRegion,
	fetchMoviesErrorRegion,
	/*  */
	fetchMoviePendingCast,
	fetchMovieSuccessCast,
	fetchMovieErrorCast,
} from '../Redux/Actions/index';

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna las movies mas populares
 * @param {string} url
 * @param {int} page
 */
export const fetchMovies = (url, page = 1) => {
	return (dispatch) => {
		if (page !== 1) {
			dispatch(fetchMoviesPagePending());
			axios
				.get(`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}`)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchMoviesPageSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchMoviesPageError(error));
				});
		} else {
			dispatch(fetchMoviesPending());
			axios
				.get(`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}`)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchMoviesSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchMoviesError(error));
				});
		}
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna la busqueda de una palabra, con relacion a
 * un nombre de movie
 * @param {string} url
 * @param {int} page
 * @param {string} query
 */
export const fetchSearchMovies = (url, page = 1, query = 'a') => {
	return (dispatch) => {
		if (page !== 1) {
			dispatch(fetchSearchMoviesPagePending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}&query=${query}`,
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchSearchMoviesPageSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSearchMoviesPageError(error));
				});
		} else {
			dispatch(fetchSearchMoviesPending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}&query=${query}`,
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchSearchMoviesSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSearchMoviesError(error));
				});
		}
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna la busqueda de una palabra, con relacion a
 * un nombre de movie
 * @param {string} url
 * @param {int} id
 */
export const fetchEspecificMovies = (url, id = 63174) => {
	return (dispatch) => {
		dispatch(fetchEspecificMoviesPending());
		axios
			.get(`${url}${id}?api_key=b2907782d07859a652052d3bae537475`)
			.then((response) => {
				// handle success
				const dataResult = response.data;
				dispatch(fetchEspecificMoviesSuccess(dataResult));
				return dataResult;
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchEspecificMoviesError(error));
			});
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna las movies mas populares, en una region especifica
 * @param {string} url
 */
export const fetchMovieCast = (url) => {
	return (dispatch) => {
		dispatch(fetchMoviePendingCast());
		axios
			.get(`${url}?api_key=b2907782d07859a652052d3bae537475`)
			.then((response) => {
				// handle success
				const dataResult = response.data.cast;
				dispatch(fetchMovieSuccessCast(dataResult));
				return dataResult;
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchMovieErrorCast(error));
			});
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna las movies mas populares, en una region especifica
 * @param {string} url
 * @param {int} page
 * @param {string} region
 */
export const fetchMoviesRegion = (url, region = '') => {
	return (dispatch) => {
		dispatch(fetchMoviesPendingRegion());
		axios
			.get(
				`${url}?api_key=b2907782d07859a652052d3bae537475&region=${region}`,
			)
			.then((response) => {
				// handle success
				const dataResult = response.data.results;
				dispatch(fetchMoviesSuccessRegion(dataResult));
				return dataResult;
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchMoviesErrorRegion(error));
			});
	};
};
