#/bin/bash

rm -rf ./dist
mkdir -p ./dist
cp ./src/*.yml ./dist
npm run compile