# Getting started
Create a .env file with 
```
API_KEY={your_key} # from imdb
```

# API path

### Searching for a film by name

```
localhost:3000/the-movie-db/search?expression=avenger
```

## Deprecated
```
localhost:3000/imdb/search?name={name}
```
#### Searching for a film by expressions (all imdb search features)
```
localhost:3000/imdb/search-all?expression={expression}
```
