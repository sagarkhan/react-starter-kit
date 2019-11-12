### STAGE 1: Build ###
FROM node:8.12.0-alpine AS build

## PROJECT DIR ##
WORKDIR /opt/dmart/notifications

## ACCEPT Runtime argument and set REACT_APP_STAGE ENV [DEV, UAT, PROD]
ARG runtime
ENV REACT_APP_STAGE $runtime

## Install react scripts required to build react app
RUN npm install react-scripts -g --silent

## Copy package and install dependencies
COPY package.json .
RUN npm install

## Copy project fles
COPY . .

## Build
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.17.5-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=build /opt/dmart/notifications/build /usr/share/nginx/html
EXPOSE 3080
CMD ["nginx", "-g", "daemon off;"]
