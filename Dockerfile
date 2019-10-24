FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL info

WORKDIR /

COPY . .

RUN yarn &&\
  yarn global add nodemon

EXPOSE 4003

CMD ["yarn", "dev"]