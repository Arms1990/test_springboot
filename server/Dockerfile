FROM node:lts

WORKDIR /src

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g

COPY . .

EXPOSE 3000

CMD [ "nodemon", "index.js" ]