export interface SearchResult {
    searchType: string;
    expression: string;
    results: Movie[];
    errorMessage: string;
}

export interface Movie {
		id: string;
    resultType: string;
    image: string;
    title: string;
    description: string;
}
