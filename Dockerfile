FROM node:10


## Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN mkdir /db
# RUN rm -rf /data/db/mongod.lock.
# RUN /data/db --repair
#RUN mkdir -p /data/db

## Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

# RUN npm i pm2 mongoose-data-seed -g --loglevel info
# RUN npm i --production --loglevel info

RUN npm i pm2 mongoose-data-seed -g --loglevel info
RUN npm i --production --loglevel info
## Bundle app source
COPY . /usr/src/app

ENTRYPOINT ["/usr/src/app/bin/entrypoint"]

EXPOSE 8080
#CMD [ "npm", "start"]
