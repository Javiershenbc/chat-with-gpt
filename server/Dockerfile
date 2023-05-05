FROM node:lts-alpine
ENV NODE_ENV=dev
ENV openai.apiKey=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
ENV elevenlabs.apiKey=d5ce585dc96447395c7bc46e1a45d76f
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --dev --silent && mv node_modules ../
COPY . .
EXPOSE 3001
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
