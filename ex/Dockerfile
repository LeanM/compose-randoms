FROM node:12.18.1-alpine
WORKDIR /usr/ex/app

COPY package*.json ./
RUN npm install --only=production
COPY . .

CMD npm start