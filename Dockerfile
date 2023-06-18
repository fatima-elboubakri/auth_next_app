
FROM node:19-alpine AS development


ENV NODE_ENV development


WORKDIR /app


COPY ./package.json /app


RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000


CMD npm start