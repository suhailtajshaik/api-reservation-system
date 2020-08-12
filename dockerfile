FROM node:8.6-alpine
WORKDIR /app
COPY . /app
RUN npm install -g yarn
RUN yarn install
CMD node server/index.js
EXPOSE 3000