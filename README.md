# React basic setup

## Installation
```
npm install
```

## Run app
```
npm start
```

### **Run server in production mode**
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

> *In most cases you are good to go with `npm start`.*

## Dev-server
The configuration for our developer server can be found in the `dev-server.js`-file.

Here we are creating a new instance of the `WebpackDevServer`. We are running webpack with the configurations inside this server. The configurations of the developer mode are found in the `webpack.config.dev.js`.

```Javascript
new WebpackDevServer(webpack(config), { ... }
```

### Configuration:
* ***publicPath:*** The build folder during the development does only exist in memory. So you cannot see it in your file system. PublicPath defines a structure in this memory and defines where to find the files. <a href="https://webpack.github.io/docs/webpack-dev-server.html#content-base" target="_blank">More...</a>
* ***hot:*** enable hot reloading <a href="https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement" target="_blank">More...</a>
* ***historyApiFallback:*** needed for the react router to use the `browserhistory`. <a href="https://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option" target="_blank">More...</a>
* ***ContentBase:*** define the root folder in which we can find the `index.html`. <a href="https://webpack.github.io/docs/webpack-dev-server.html#content-base" target="_blank">More...</a>

Here we can define the port of the server and the error handling:

```Javascript
.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening on port 3000');
});
```
