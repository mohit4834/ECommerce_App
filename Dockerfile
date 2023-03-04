FROM node:16-alpine AS build


RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# -----------------

FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install --production --legacy-peer-deps

COPY --from=build ./dist/ecommerce-app-mohit ./dist
COPY ./auth_config.json .

ENV NODE_ENV=production
ENV SERVER_PORT=4200
ENV API_SERVER_PORT=8081

EXPOSE 4200
EXPOSE 8081

CMD ["npm", "run", "prod"]
