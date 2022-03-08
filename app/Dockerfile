FROM node:16-alpine

ARG DEFAULT_PORT=3000

WORKDIR app

COPY ./package.json /app

RUN npm i

COPY . /app

EXPOSE $DEFAULT_PORT

CMD ["npm", "run", "start:dev"]