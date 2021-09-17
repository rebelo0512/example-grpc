#!/bin/bash

###### API GATEWAY ######
cd api-gateway/
yarn build && pm2 start npm -n dev-api-gateway -- run start:dev
cd -

###### SERVICES ######

# CONFIGURATION SERVICE
cd microservices/configuration-service
yarn build && pm2 start npm -n dev-configuration-service -- run start:dev
cd -