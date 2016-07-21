rm -rf dist
node_modules/.bin/r.js -o build/app.build.js
cd dist
rm build.txt
rm -rf application
rm backbone.js
rm jquery.js
rm marionette.js
rm underscore.js
rm index.html

cd ..
cp dist/main.js public/main.js