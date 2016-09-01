# React basic setup

### Run server in production mode
#### Windows
```terminal
SET "NODE_ENV=production" && npm start
``` 
#### Unix-like
```terminal
NODE_ENV=production npm start
``` 
---
## Explanation
This project provides a setup for further projects with React JS. Webpack is the build system and there is a production and a developer mode. You will find the descriptions below.

### NPM Scripts
***Start*** - The start script decides whether we are in production mode or in developer mode.
The production mode is usually set by the variable `NODE_ENV`. With `if-enf` we can check this variable and either start the tasks for production or developer mode.
```
"start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev"
```

***Start:dev*** - This script runs our developer server (webpack-dev-server). Its configuration can be found in the `dev-server.js`.
```
"start:dev": "node dev-server.js",
```

***Start:prod*** - This script runs the productiv build and the production server.The configuration of this server is found in the `server.js`;
```
"start:prod": "npm run build-prod && node server.js",
```

***Build-prod*** - With this script we clean our dist folder and start webpack with the specific config file for the production mode.
```
"build-prod": "npm run clean:dist && webpack --config webpack.config.prod.js --progress",
```

***Clean:dist*** - clears the dist folder if needed (useful in production mode)

```
"clean:dist": "rimraf dist/*",
```