FROM node:10

WORKDIR /starter
COPY package.json /starter/package.json

RUN npm install

COPY .env.example /starter/.env.example
COPY . /starter

CMD ["node","app.js"]

EXPOSE 3000
