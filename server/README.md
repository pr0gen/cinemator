# Getting started
Create a .env file with 

```
API_KEY_THE_MOVIE_DB={key}
```

[Swagger](http://localhost:3000/api) is avilable ! 

# API path


### Login 
```
POST http://localhost:3000/auth/login
{
  "username": "John",
  "password": "changeme"
}
```

### Searching for a film by name

```
GET localhost:3000/the-movie-db/search?expression=avenger
```

### Retrieving lang details for a film

```
GET localhost:3000/the-movie-db/lang-details?id=47369
```

### Find movie details

```
GET localhost:3000/the-movie-db/find-movie-details?id=47369
```

## Users
### Create user

```
POST localhost:3000/users/create
{
  "username": "John",
  "email": "Doe",
  "password": "changeme"
}

```

## Bookmarks

### Create bookmark
```
POST localhost:3000/bookmark/create
{
  "name": "avenger",
  "owner": "Tigran"
}

```

### Get bookmarks for user
```
GET localhost:3000/bookmark/owner?owner=Tigran
```

### Delete bookmark by filmId 
```
DELETE localhost:3000/bookmark?filmId=
```

## Likes

### Update like 
```
PUT localhost:3000/like/update 
{
  "owner": "Tigran",
  "filmId": 1
}
```

