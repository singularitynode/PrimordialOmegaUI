FROM node:20-alpine
WORKDIR /app
COPY ./src /app/src
COPY package.json /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
