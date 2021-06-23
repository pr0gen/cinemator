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

### Delete user
``` 
DELETE http://localhost:3000/users?userId=3
``` 

### Update user
#### password
``` 
PUT localhost:3000/users/update/password
{
    "id": "6",
    "newPassword": "p"
}

```


## Bookmarks

### Create bookmark
```
POST localhost:3000/bookmark/create
{
  "filmId": 1771,
  "owner": "Tigran"
}
```

### Get bookmarks for user
```
GET localhost:3000/bookmark/owner?ownerId=1
```

### Delete bookmark by filmId 
```
DELETE localhost:3000/bookmark?id=
```

## Likes

### Update like 
```
PUT localhost:3000/like/update 
{
  "ownerId": 1,
  "filmId": 1
}
```

### Get like 
```
GET localhost:3000/like/owner?ownerId=1
```
