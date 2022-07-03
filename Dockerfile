FROM node:16-alpine

WORKDIR /etc/www

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]