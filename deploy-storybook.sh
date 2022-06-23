#!/usr/bin/env sh
# abort on errors

# build
yarn build-storybook

cd storybook-static
git init
git add -A
git commit -m "deploy storybook"
git push git@gitlab.com:cardeer/sci-web-frontend.git master:storybook-deploy