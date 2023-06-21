FROM node:latest

WORKDIR /app

COPY . .

RUN npm install 

RUN npm uninstall bcrypt 

RUN npm install bcrypt


EXPOSE 3003

CMD node server.js