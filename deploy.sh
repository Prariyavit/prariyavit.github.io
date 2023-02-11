#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:Prariyavit/Prariyavit.github.io.git main:gh-pages    

cd -    