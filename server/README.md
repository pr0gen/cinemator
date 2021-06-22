# Getting started
Create a .env file with 
```
API_KEY_THE_MOVIE_DB={key}
```

# API path

### Login 
```
http://localhost:3000/auth/login
{
  "username": "John",
  "password": "changeme"
}
```

### Searching for a film by name

```
localhost:3000/the-movie-db/search?expression=avenger
```

### Retrieving lang details for a film

```
localhost:3000/the-movie-db/lang-details?id=47369
```

### Find movie details

```
localhost:3000/the-movie-db/find-movie-details?id=47369
```

### Create user

```
localhost:3000/users/create
{
  "username": "John",
  "email": "Doe",
  "password": "changeme"
}

```

### Create bookmark
```
localhost:3000/bookmark/create
{
  "filmId": 1771,
  "owner": "Tigran"
}
```

### Get bookmarks for user
```
localhost:3000/bookmark/owner?owner=Tigran
```
