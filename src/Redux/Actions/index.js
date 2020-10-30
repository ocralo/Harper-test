export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const FETCH_MOVIES_PAGE_PENDING = 'FETCH_MOVIES_PAGE_PENDING';
export const FETCH_MOVIES_PAGE_SUCCESS = 'FETCH_MOVIES_PAGE_SUCCESS';
export const FETCH_MOVIES_PAGE_ERROR = 'FETCH_MOVIES_PAGE_ERROR';

export const FETCH_MOVIES_SEARCH_PENDING = 'FETCH_MOVIES_SEARCH_PENDING';
export const FETCH_MOVIES_SEARCH_SUCCESS = 'FETCH_MOVIES_SEARCH_SUCCESS';
export const FETCH_MOVIES_SEARCH_ERROR = 'FETCH_MOVIES_SEARCH_ERROR';

export const FETCH_MOVIES_SEARCH_PAGE_PENDING =
	'FETCH_MOVIES_SEARCH_PAGE_PENDING';
export const FETCH_MOVIES_SEARCH_PAGE_SUCCESS =
	'FETCH_MOVIES_SEARCH_PAGE_SUCCESS';
export const FETCH_MOVIES_SEARCH_PAGE_ERROR = 'FETCH_MOVIES_SEARCH_PAGE_ERROR';

export const FETCH_MOVIES_ESPECIFIC_PENDING = 'FETCH_MOVIES_ESPECIFIC_PENDING';
export const FETCH_MOVIES_ESPECIFIC_SUCCESS = 'FETCH_MOVIES_ESPECIFIC_SUCCESS';
export const FETCH_MOVIES_ESPECIFIC_ERROR = 'FETCH_MOVIES_ESPECIFIC_ERROR';

export const FETCH_MOVIES_PENDING_REGION = 'FETCH_MOVIES_PENDING_REGION';
export const FETCH_MOVIES_SUCCESS_REGION = 'FETCH_MOVIES_SUCCESS_REGION';
export const FETCH_MOVIES_ERROR_REGION = 'FETCH_MOVIES_ERROR_REGION';

export const FETCH_MOVIE_PENDING_CAST = 'FETCH_MOVIE_PENDING_CAST';
export const FETCH_MOVIE_SUCCESS_CAST = 'FETCH_MOVIE_SUCCESS_CAST';
export const FETCH_MOVIE_ERROR_CAST = 'FETCH_MOVIE_ERROR_CAST';

/**
 * espera de la peticion, para traer movies populares por pagina
 */
export function fetchMoviesPagePending() {
	return {
		type: FETCH_MOVIES_PAGE_PENDING,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} movies
 */
export function fetchMoviesPageSuccess(movies) {
	return {
		type: FETCH_MOVIES_PAGE_SUCCESS,
		movies,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchMoviesPageError(error) {
	return {
		type: FETCH_MOVIES_PAGE_ERROR,
		error: error,
	};
}
/**
 * espera de la peticion, para traer movies populares por pagina
 */
export function fetchMoviesPending() {
	return {
		type: FETCH_MOVIES_PENDING,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} movies
 */
export function fetchMoviesSuccess(movies) {
	return {
		type: FETCH_MOVIES_SUCCESS,
		movies,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchMoviesError(error) {
	return {
		type: FETCH_MOVIES_ERROR,
		error: error,
	};
}

/**
 * espera de la peticion, para traer movies buscadas
 */
export function fetchSearchMoviesPagePending() {
	return {
		type: FETCH_MOVIES_SEARCH_PAGE_PENDING,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} moviesSearch
 */
export function fetchSearchMoviesPageSuccess(moviesSearch) {
	return {
		type: FETCH_MOVIES_SEARCH_PAGE_SUCCESS,
		moviesSearch,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchSearchMoviesPageError(error) {
	return {
		type: FETCH_MOVIES_SEARCH_PAGE_ERROR,
		error: error,
	};
}

/**
 * espera de la peticion, para traer movies buscadas
 */
export function fetchSearchMoviesPending() {
	return {
		type: FETCH_MOVIES_SEARCH_PENDING,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} moviesSearch
 */
export function fetchSearchMoviesSuccess(moviesSearch) {
	return {
		type: FETCH_MOVIES_SEARCH_SUCCESS,
		moviesSearch,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchSearchMoviesError(error) {
	return {
		type: FETCH_MOVIES_SEARCH_ERROR,
		error: error,
	};
}

/**
 * espera de la peticion, para traer movies buscadas
 */
export function fetchEspecificMoviesPending() {
	return {
		type: FETCH_MOVIES_ESPECIFIC_PENDING,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} moviesSearch
 */
export function fetchEspecificMoviesSuccess(moviesEspecific) {
	return {
		type: FETCH_MOVIES_ESPECIFIC_SUCCESS,
		moviesEspecific,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchEspecificMoviesError(error) {
	return {
		type: FETCH_MOVIES_ESPECIFIC_ERROR,
		error: error,
	};
}

/**
 * espera de la peticion, para traer movies populares por pagina
 */
export function fetchMoviesPendingRegion() {
	return {
		type: FETCH_MOVIES_PENDING_REGION,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} movies
 */
export function fetchMoviesSuccessRegion(movies) {
	return {
		type: FETCH_MOVIES_SUCCESS_REGION,
		movies,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchMoviesErrorRegion(error) {
	return {
		type: FETCH_MOVIES_ERROR_REGION,
		error: error,
	};
}

/**
 * espera de la peticion, para traer movies populares por pagina
 */
export function fetchMoviePendingCast() {
	return {
		type: FETCH_MOVIE_PENDING_CAST,
	};
}
/**
 * trae las movies populares, si la peticion fue correcta
 * @param {Array} movies
 */
export function fetchMovieSuccessCast(cast) {
	return {
		type: FETCH_MOVIE_SUCCESS_CAST,
		cast,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchMovieErrorCast(error) {
	return {
		type: FETCH_MOVIE_ERROR_CAST,
		error: error,
	};
}
