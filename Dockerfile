FROM node:12

WORKDIR /var/www/app

COPY package.json  .

RUN npm i

COPY . .

RUN npm run build

CMD ["node", "index.js"]