DC=docker-compose

.DEFAULT_GOAL := help
.PHONY: help

help:  ##Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

up: ##Start Docker
	$(DC) up

upd: ##Start Docker distached
	$(DC) up -d

do: ##Stop Docker
	$(DC) down

ex: ##Connect to node
	$(DC) exec --user=www-data app /bin/bash

exa: ##Connect to node Admin
	$(DC) exec --user=root app /bin/bash
