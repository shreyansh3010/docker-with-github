FROM node:12

WORKDIR /var/www/app

COPY package.json .

RUN npm i

RUN npm build

COPY . .

CMD ["node", "index.js"]