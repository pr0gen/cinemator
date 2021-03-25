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

ex-server: ##Connect to node server
	$(DC) exec --user=www-data appServer /bin/bash

exa-server: ##Connect to node server Admin
	$(DC) exec --user=root appServer /bin/bash

ex-client: ##Connect to node client
	$(DC) exec --user=www-data appClient /bin/bash

exa-client: ##Connect to node client  Admin
	$(DC) exec --user=root appClient /bin/bash

mysql :
	$(DC) exec --user=root mysql /bin/bash

logs: ##Connect to node Admin
	$(DC) logs -f