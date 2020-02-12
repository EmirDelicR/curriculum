#!/bin/bash

git rm -r -f dist
git add .
git commit -m "Removing Dist folder"
git push

echo 'Delete branch on GIT!'


npm run build

git add dist && git commit -m "Initial dist subtree commit"

git subtree push --prefix dist origin gh-pages

git push