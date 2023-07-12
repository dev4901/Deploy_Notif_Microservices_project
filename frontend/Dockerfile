FROM node:alpine

COPY . ./app

WORKDIR ./app

RUN npm install -g --force

RUN yarn install

EXPOSE 3000

#CMD sh
CMD npm start > debug.out

