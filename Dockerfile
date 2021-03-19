FROM node:latest

RUN mkdir -p /usr/src/app

COPY ./package.json ./package-lock.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm i

COPY . /usr/src/app

WORKDIR /usr/src/app/react-rep-app

RUN npm i

WORKDIR /usr/src/app

CMD npm start