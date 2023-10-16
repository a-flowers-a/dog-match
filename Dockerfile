FROM node:16.18.0

WORKDIR /match-dog

COPY package-lock.json /match-dog/

COPY package.json /match-dog/

RUN npm install

COPY . /match-dog/

EXPOSE 3000

CMD [ "npm", "start" ]