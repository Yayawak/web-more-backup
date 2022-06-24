cd storybook-static
git init
git add -A
git commit -m "deploy storybook"
git push -f git@gitlab.com:cardeer/sci-web-frontend.git master:storybook-deploy
cd ..