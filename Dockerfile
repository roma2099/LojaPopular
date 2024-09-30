
FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]