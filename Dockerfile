FROM node:14.17.6

COPY . /services
WORKDIR /services

RUN yarn install --ignore-engines \
    && yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]