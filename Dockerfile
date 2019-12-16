FROM node:10-alpine as build-stage
ARG environment
ENV environment=${environment}
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
RUN npm run build:${environment}

#prepare nginx
FROM nginx:1.16.1-alpine
COPY --from=build-stage /app/dist/fuse/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 8080
CMD ["nginx","-g","daemon off;"]
