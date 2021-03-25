export interface SearchResult {
    searchType: string;
    expression: string;
    results: Movie[];
    errorMessage: string;
}

export interface Movie {
		id: number;
    resultType: string;
    image: string;
    title: string;
    description: string;
}

export interface Title {
  id: number,
  title: string,
  originalTitle: string,
  fullTitle: string,
  type: string,
  year: number,


}

