SELF_DIR := $(dir $(lastword $(MAKEFILE_LIST)))
include $(SELF_DIR)/docker/docker.mk

DC=docker-compose -f docker-compose.yml -f docker-compose-traefik.yml
