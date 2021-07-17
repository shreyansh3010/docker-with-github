FROM node:12

WORKDIR /var/www/app

COPY package.json  .

RUN npm i

COPY . .

RUN npm build

CMD ["node", "index.js"]