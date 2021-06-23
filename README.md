
# Cinemator

## Start project
### Requirements
- Docker
- Docker-compose

1. Make sure you follow [docker installation](https://docs.docker.com/engine/install/linux-postinstall/) to not have permission problems
2. Make sure you don't run docker with sudo (it can cause permission issues)

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
docker-compose exec -T mysql  mysql -u root -p root cinemator < test_data.sql
```

- Make sure you have this on your ```/etc/hosts``` file


```
127.0.0.1	localhost
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

If you ran ``` make upd ``` you can use  ```docker-compose ps ``` to see the front URL
or if you used ```make up``` the local URL will be given into the terminal.

### Some commands
Connect to docker appServer container : 
```Make ex-server```

works aswell for client app :
```Make ex-client```

as ROOT :
```Make exa-server (or client like below)```

the container mysql is reachable too with 
```make mysql```

## Features

Notre projet est donc composé de Next.js pour le Back et Nuxt.js pour le front,
chacun des deux outils tournent sur un service docker avec la dernière version de node.js.
Nous avons aussi un service docker mysql qui lui nous sert de base de données pour enregistrer nos utilisateur de
l'application web, et pour finir un service redis qui nous permet de faire persister les données et il a aussi 
une utilisation dans la gestion du cache avec Nest.js


### Nest.js 
Grace à Nest.js nous avons une panoplie de features native que nous avons utilisé pour notre projet,
nous avons donc utilisé la gestion du cache de Nest.js sur les appels aux webservices, qui dure quelques secondes,
ensuite pour la partie persistance de données nous avons utilisé l'ORM typeOrm qui fonctionne bien avec Nest.js
nous avons donc fait un système de connexion utilisateur avec une sauvegarde en base des utilisateur de l'application web
et enfin l'utilisation de controllers pour que l'utilisateur puisse envoyer des requetes a notre serveur. 
