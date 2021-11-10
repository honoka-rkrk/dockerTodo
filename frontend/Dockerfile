FROM node:16.13.0-alpine
WORKDIR /app
COPY ./package.json ./yarn.lock ./
COPY .env ./
RUN yarn install
COPY src src
COPY public public
EXPOSE 3000
CMD ["yarn","start"]