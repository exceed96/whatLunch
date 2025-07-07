FROM node:24-alpine 

WORKDIR /src 

COPY package.json .
COPY package-lock.json .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY . . 

RUN rm -rf package-lock.json node_modules
RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "preview"]