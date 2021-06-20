export interface SearchResult {
    page: number;
    results: MovieSearchResult[];
    total_pages: number;
    total_results: number;
}

export interface MovieSearchResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieTranslation {
    id: number;
    translations: Lang[];
}

export interface Lang {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: LangDetail[];
}

export interface LangDetail {
    homepage: string;
    overview: string;
    runtime: string;
    tagline: string;
    title: string;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: GenreDetails[];
    homepage: string;
    id: number;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompaniesDetails[];
    production_countries: ProductionCountriesDetails[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface GenreDetails {
    id: number;
    name: string;
}

export interface ProductionCompaniesDetails {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountriesDetails {
    iso_3166_1: string;
    name: string;
}


