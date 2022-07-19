#!/bin/sh
envsubst '${PROJECT}' < /data/pm2script/ecosystem.config.js > /data/pm2script/prod.ecosystem.config.js
"$@"
