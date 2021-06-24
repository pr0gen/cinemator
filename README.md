
# Cinemator

## Start project
### Requirements
- Docker
- Docker-compose

1. Make sure you follow [docker installation](https://docs.docker.com/engine/install/linux-postinstall/) to not have permission problems
2. Make sure you don't run docker with sudo 

### Run projects
- Start docker : 
```
make up
```

If you want detached mode: Run containers in the background :
```
make upd
```

- Import our sql script to have some test data into the project

```
docker-compose exec -T mysql mysql -uroot -proot cinemator < test_data.sql
```


- Make sure you have this on your `/etc/hosts` file

```
127.0.0.1	localhost
```


### Configuration: 
BackEnd API keys in `server/.env` file:
Retrieve API keys from respected services or ask the mainteners ! 
```
API_KEY_IMDB=
API_KEY_THE_MOVIE_DB=
```

### Project access
Project might be running now, so you have access to front (client) on :
```
http://localhost:3001/
```
server (URL) : 
```
http://localhost:3000/
```

If you ran `make upd` you can use  `docker-compose ps` to see the front URL
or if you used `make up` the local URL will be given into the terminal.

### Some commands
Connect to docker appServer container : 
```
Make ex-server
```

works aswell for client app :
```
Make ex-client
```

as ROOT :
```
Make exa-server (or client like below)
```

the container mysql is reachable too with 
```
make mysql
```

## Description du projet

Cinemator a pour but de recenser tous les films (internationaux), en un seul
endroit, et de permettre aux utilisateurs de rechercher des informations sur
des films. Un utilisateur peut liker et bookmarker les films qu'ils ont
apprécié ou qui potentiellement les intéressent.


## Description technique du projet

Cinemator utilise [Docker](https://www.docker.com/) comme outil de deploiment.

Il utilise [Nest.js](https://nestjs.com/) comme Framework dans le BackEnd, et
[TypeOrm](https://typeorm.io/#/) comme ORM.

Pour le FrontEnd, Nuxt.js a été choisi à l'aide de [Buefy](https://buefy.org/)
comme Framework CSS.

Les deux instances tournent sur un service docker (nodeClient pour le front, et
nodeServer pour le back) avec la dernière version de node.js dans les images
docker. Nous avons aussi un service docker [MySQL](https://www.mysql.com/) qui
nous sert de base de données pour enregistrer nos utilisateurs.

Enfin un service [Redis](https://redis.io/) qui nous permet la gestion du cache
avec Nest.js

Doc:
  - [Backend](https://github.com/pr0gen/cinemator/tree/main/server)
  - [FrontEnd](https://github.com/pr0gen/cinemator/tree/main/client)

## Features
  
### API consommées
 - [x] IMDB 
 - [x] TheMovieDB 

### Controllers

 - [x] User: 
   - POST: create a user
   - DELETE: delete a user
   - PUT: update a user

 - [x] Auth:
   - POST get a token

 - [x] Bookmark:
   - POST: create a bookmark
   - DELETE: delete a bookmark
   - GET: get a user bookmarks

 - [x] Like:
   - PUT: update a like
   - GET: get a user likes

 - [x] Bookmark:
   - GET: search a movie from expression
   - GET: get lang details of a movie
   - GET: movie description 

### Front 

- [x] Homepage:
     <p align="center">
       <img src="https://github.com/pr0gen/cinemator/blob/develop/images/home.gif" width="600" >
    </p>
  
- [x] create account:
   <p align="center">
       <img src="https://github.com/pr0gen/cinemator/blob/develop/images/create-account.gif" width="600" >
   </p>
- [x] login, update password, delete account :
   <p align="center">
       <img src="https://github.com/pr0gen/cinemator/blob/develop/images/update-user.gif" width="600" >
   </p>

- [x] Like and Bookmark :
   <p align="center">
       <img src="https://github.com/pr0gen/cinemator/blob/develop/images/like-and-bookmark.gif" width="600" >
   </p>

 
## Nos niveaux dans ces langages et Frameworks
|                | Arthur        |  Quentin       |  Tigran         |
| -------------  |:-------------:| :-------------:|  :-------------:|
| Docker Compose | Zero          | Moyen          |  Zero           |
| TypeScript     | Moyen         | Moyen          |  Moyen          |
| Buefy          | Moyen         | Zero           |  Zero           |
| Nest JS        | Zero          | Zero           |  Zero           |
| Nuxt JS        | Leger         | Zero           |  Zero           |


### Nest.js
Nest.js, fournit une panoplie de features natives permettant de développer
facilement un web service.

Comme:

Le support natif pour le procotole HTTP, avec des Controllers, assure une
architecture en micro-service efficiente.
 
La gestion du cache sur les appels aux webservices externes, qui dure quelques
secondes.

L'intégration avec TypeOrm permet de la persistance de données. La
fonctionnalité de gestion de compte avec connexion et authentication avec un
token JWT a pu être réalisé.

La mise en place de tests d'intégration à été réalisé.
*Mais abandonné parce Mocker tout c'est chiant.*


### Nuxt.js
[Nuxt.js](https://nuxtjs.org/) est un framework gratuit et open source basé
notamment sur [Vue.js](https://vuejs.org/) et Node.js.

L'utilisation de ce framework a de nombreux avantages comme l'amélioration du
score de reference des moteurs de recherche du fait du rendu côté serveur
(Server Side Rendering) des pages web avant leur envoi vers le client ce qui
n'est pas fait de manière générale dans les autres SPA.

De plus utiliser Nuxt.js offre énormément de confort, car il comprend dans sa version
de base VueJS, Vue Router, Vuex, Vue Server Renderer et Vue-Meta pour un bundle
qui s’élève à seulement 60k et le tout sans aucune configuration.

## Conclusion

Nos retours d'expérience sur les différentes technos:

> Docker c'est bien mais c'est chiant à configurer et mettre en place. ~ Quentin

> NestJS, le framework est très bien mais le TypeScript pour faire une API,
> c'est bancale parce que ce n'est pas fortement typé. ~ Tigran

> NuxtJS, rapide et peu de config à mettre. Developper friendly. ~ Arthur 

