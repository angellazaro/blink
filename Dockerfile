FROM arm32v7/node:9.4.0-stretch

COPY package.json ./
COPY blink.js ./
RUN npm install
CMD ["npm", "start"]
