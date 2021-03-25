
# Cinemator

##Start project
###Requirements
- Docker
- Docker-compose

###Run projects
- Start docker : 
```
make up
```

If you want detached mode: Run containers in the background :
```
make upd
```
- Make sure you have this on your ```/etc/hosts``` file

```
127.0.0.1	localhost
```

###Project access
Project might be running now, so you have access to front (client) on :
```
http://localhost:3001/
```
server (URL) : 
```
http://localhost:3000/
```

###Some commands
Connect to docker app container : 
```Make ex```

as ROOT : 
```Make exa```