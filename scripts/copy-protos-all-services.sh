#!/bin/bash

###### SERVICES ######

# CONFIGURATION SERVICE
cd - && rm -rf microservices/configuration-service/src/shared/_proto && cp -r shared/_proto microservices/configuration-service/src/shared
