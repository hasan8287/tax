FROM node:10

RUN apt-get update -y
RUN apt install ssh git netcat apt-utils -y

WORKDIR /app

COPY package.json /app

RUN npm install
RUN apt update && \
    apt install -y mysql-client

COPY . /app
ENTRYPOINT ["/app/bin/entrypoint"]

EXPOSE 8001