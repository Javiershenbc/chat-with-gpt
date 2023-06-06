FROM node:lts-alpine

WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
COPY . .
# Copy .env file
COPY .env .env
RUN npm install --dev --silent && mv node_modules ../

RUN chown -R node /usr/src/app
USER node
EXPOSE 3001
EXPOSE 3000
CMD ["npm", "start"]
