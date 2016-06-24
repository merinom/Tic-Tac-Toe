Welcome to my first React App!

To use it (localy), download and in the proyect:

1. Install and init npm

sudo apt-get install npm
sudo npm install -g npm
npm init

2. Install browserify, babelify and a simple server 

sudo npm install -g browserify
npm install --save-dev browserify babelify
sudo npm install -g node-static

3. Start the app

browserify -t babelify src/js/index.jsx > src/build/index.js
static -p 3000

4. Go to web

http://localhost:3000