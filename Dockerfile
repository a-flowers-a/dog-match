FROM node:16.18.0-alpine AS reactbuild

WORKDIR /match-dog

COPY package-lock.json /match-dog/

COPY package.json /match-dog/

RUN npm install

COPY . /match-dog/

RUN npm run build

#Nginx Server build 
FROM nginx:stable-alpine

COPY --from=reactbuild /match-dog/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]