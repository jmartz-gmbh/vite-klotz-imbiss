#!/bin/bash

docker build -t jomartz/klotz-imbiss:v0.1 . --no-cache
docker image push jomartz/klotz-imbiss:v0.1