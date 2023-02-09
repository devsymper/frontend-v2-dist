#!/bin/bash
env=""
envDomain=""
originEnv=""
if [ $2 != "" ] && [ $2 != "prod" ]
then
    originEnv=$2
    env=$2"_"
    envDomain=$2"-"
fi
sed "s/{SYMPER_IMAGE}/$1/g" k8s/nginx_deployment.yaml > k8s/new_nginx_deployment.yaml
sed "s/{ENVIRONMENT_DOMAIN}/$envDomain/g" k8s/service_ing.yaml > k8s/new_service_ing.yaml
sed "s/{ENVIRONMENT}/$originEnv/g" k8s/config_env.yaml > k8s/new_config_env.yaml
rm -rf k8s/nginx_deployment.yaml
rm -rf k8s/config_env.yaml
rm -rf k8s/service_ing.yaml