FROM node

ENV NODE_ENV=docker

WORKDIR /app

COPY package*.json .

RUN npm install

COPY /src /src

EXPOSE 5000

CMD [ "npm", "run", "dev" ]