#!/bin/bash

docker build -t ghcr.io/mihaianghelin/who-am-i-fe:master .
docker push ghcr.io/mihaianghelin/who-am-i-fe:master

ssh mihui@192.168.100.35 "docker pull ghcr.io/mihaianghelin/who-am-i-fe:master && docker compose -f /home/mihui/Docker/docker-compose.who-am-i.yaml up -d"
