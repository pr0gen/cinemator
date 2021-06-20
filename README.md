
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
docker-compose exec -T mysql mysql -uroot -proot cinemator < test_data.sql```


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

### Some commands
Connect to docker appServer container : 
```Make ex server```

works aswell for client app :
```Make ex client```

as ROOT :
```Make exa server (or client)```
