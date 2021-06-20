
const BASE_URL = "https://api.themoviedb.org/";
const VERSION_3 = "3/";
export const API_KEY_PATH = "?api_key=";

// Search paths
export const BASIC_SEARCH = BASE_URL + VERSION_3 + "search/movie" + API_KEY_PATH;
export const QUERY = "&query=";

// Film details
export const BASE_LANG_DETAILS = BASE_URL + VERSION_3 + "movie/";
export const TRANSLATION = "translations";

export const MOVIE_DETAILS = BASE_URL + VERSION_3 + "movie/";
export const LANG = "&language=";
