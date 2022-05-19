#!/bin/bash
set -e

echo "Wait pleas starting development server...................................."

cd /app

if [ ! -d "/app/node_modules" ]; then
  npm install --verbose
fi

sysctl fs.inotify.max_user_watches=1048576

npm start
