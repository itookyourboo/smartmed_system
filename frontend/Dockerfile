FROM node:lts-alpine
WORKDIR /app
COPY *.json /app/
RUN yarn add global @vue/cli
RUN yarn install
COPY . .
CMD [ "yarn", "serve" ]
