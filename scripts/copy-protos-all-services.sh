#!/bin/bash

###### API GATEWAY ######
rm -rf api-gateway/src/shared/_proto && cp -r shared/_proto api-gateway/src/shared

###### SERVICES ######

# CONFIGURATION SERVICE
rm -rf microservices/configuration-service/src/shared/_proto && cp -r shared/_proto microservices/configuration-service/src/shared
