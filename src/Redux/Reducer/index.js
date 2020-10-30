import {
	FETCH_MOVIES_PENDING,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_ERROR,
	/*  */
	FETCH_MOVIES_PAGE_PENDING,
	FETCH_MOVIES_PAGE_SUCCESS,
	FETCH_MOVIES_PAGE_ERROR,
	/*  */
	FETCH_MOVIES_SEARCH_PENDING,
	FETCH_MOVIES_SEARCH_SUCCESS,
	FETCH_MOVIES_SEARCH_ERROR,
	/*  */
	FETCH_MOVIES_SEARCH_PAGE_PENDING,
	FETCH_MOVIES_SEARCH_PAGE_SUCCESS,
	FETCH_MOVIES_SEARCH_PAGE_ERROR,
	/*  */
	FETCH_MOVIES_ESPECIFIC_PENDING,
	FETCH_MOVIES_ESPECIFIC_SUCCESS,
	FETCH_MOVIES_ESPECIFIC_ERROR,
	/*  */
	FETCH_MOVIES_PENDING_REGION,
	FETCH_MOVIES_SUCCESS_REGION,
	FETCH_MOVIES_ERROR_REGION,
	/*  */
	FETCH_MOVIE_PENDING_CAST,
	FETCH_MOVIE_SUCCESS_CAST,
	FETCH_MOVIE_ERROR_CAST,
} from '../Actions/index';

const initialState = {
	pending: false,
	pendingRegion: false,
	movies: [],
	moviesRegion: [],
	moviesSearch: [],
	moviesEspecific: {
		production_companies: [{ name: '' }],
		genres: [{ name: '' }],
	},
	cast:[],
	errorRegion: null,
	error: null,
	errorSearch: null,
};

/**
 * Manejador de acciones
 * @param {JSON} state
 * @param {*} action
 */
export default function productsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_MOVIES_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_MOVIES_SUCCESS:
			return {
				...state,
				pending: false,
				movies: action.movies,
			};
		case FETCH_MOVIES_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		/*  */
		case FETCH_MOVIES_PAGE_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_MOVIES_PAGE_SUCCESS:
			const actionSerie = action.movies;
			return {
				...state,
				pending: false,
				movies: state.movies.concat(actionSerie),
			};
		case FETCH_MOVIES_PAGE_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				movies: state.movies,
			};
		/*  */
		case FETCH_MOVIES_SEARCH_PENDING:
			return {
				...state,
				pending: true,
				moviesSearch: state.moviesSearch,
			};
		case FETCH_MOVIES_SEARCH_SUCCESS:
			return {
				...state,
				pending: false,
				moviesSearch: action.moviesSearch,
			};
		case FETCH_MOVIES_SEARCH_PAGE_ERROR:
			return {
				...state,
				pending: false,
				errorSearch: action.error,
				moviesSearch: state.moviesSearch,
			};
		/*  */
		case FETCH_MOVIES_SEARCH_PAGE_PENDING:
			return {
				...state,
				pending: true,
				moviesSearch: state.moviesSearch,
			};
		case FETCH_MOVIES_SEARCH_PAGE_SUCCESS:
			const actionSerieSearch3 = action.moviesSearch;
			return {
				...state,
				pending: false,
				moviesSearch: state.moviesSearch.concat(actionSerieSearch3),
			};
		case FETCH_MOVIES_SEARCH_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				moviesSearch: state.moviesSearch,
			};
		/*  */
		case FETCH_MOVIES_ESPECIFIC_PENDING:
			return {
				...state,
				pending: true,
				moviesEspecific: state.moviesEspecific,
			};
		case FETCH_MOVIES_ESPECIFIC_SUCCESS:
			return {
				...state,
				pending: false,
				moviesEspecific: action.moviesEspecific,
			};
		case FETCH_MOVIES_ESPECIFIC_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				moviesEspecific: state.moviesEspecific,
			};
		/*  */
		case FETCH_MOVIES_PENDING_REGION:
			return {
				...state,
				pending: true,
			};
		case FETCH_MOVIES_SUCCESS_REGION:
			return {
				...state,
				pending: false,
				moviesRegion: action.movies,
			};
		case FETCH_MOVIES_ERROR_REGION:
			return {
				...state,
				pendingRegion: false,
				errorRegion: action.error,
			};
		/*  */
		case FETCH_MOVIE_PENDING_CAST:
			return {
				...state,
				pending: true,
			};
		case FETCH_MOVIE_SUCCESS_CAST:
			return {
				...state,
				pending: false,
				cast: action.cast,
			};
		case FETCH_MOVIE_ERROR_CAST:
			return {
				...state,
				pendingRegion: false,
				errorRegion: action.error,
			};
		default:
			return state;
	}
}

export const getMovies = (state) => state.movies;
export const getMoviesRegion = (state) => state.moviesRegion;
export const getMoviesSearch = (state) => state.moviesSearch;
export const getMoviesEspecific = (state) => state.moviesEspecific;
export const getMovieCast = (state) => state.cast;
export const getMoviesPending = (state) => state.pending;
export const getMoviesError = (state) => state.error;
export const getMoviesErrorSearch = (state) => state.errorSearch;
