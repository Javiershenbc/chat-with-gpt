FROM node:lts-alpine
ENV NODE_ENV=dev
ENV NODE_OPTIONS --openssl-legacy-provider
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --dev --silent && mv node_modules ../
COPY . .
EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
CMD ["npm", "start"]
