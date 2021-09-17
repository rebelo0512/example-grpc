#!/bin/bash

###### API GATEWAY ######
cp -r .env* api-gateway/

###### SERVICES ######

# CONFIGURATION SERVICE
cp -r .env* microservices/configuration-service/
