#!/bin/bash
set -e

mkdir -p /etc/supervisor/conf.d

if [ "${BUILD_ENV}" = "development" ]; then
  cp -f /app/docker/supervisord.dev.conf /etc/supervisor/conf.d/supervisord.conf
  cp -f /app/docker/nginx.dev.conf /etc/nginx/conf.d/default.conf
else
  cp -f /app/docker/supervisord.prod.conf /etc/supervisor/conf.d/supervisord.conf
  cp -f /app/docker/nginx.prod.conf /etc/nginx/conf.d/default.conf

  cd /app
  npm install --verbose
  npm run build
fi
