FROM node:14.18.1-alpine
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY src src
COPY public public
EXPOSE 3000
CMD ["yarn","start"]