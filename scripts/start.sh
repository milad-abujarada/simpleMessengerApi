#/bin/bash


if [ ! -d ./node_modules ]; then
    npm i
fi

npm run build && node ./dist/index.js