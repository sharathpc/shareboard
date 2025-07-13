FROM node:14.17.6 AS builder

# Set env variable
ARG REACT_APP_SERVICE_URL
ENV REACT_APP_SERVICE_URL=$REACT_APP_SERVICE_URL

COPY . /webapp
WORKDIR /webapp

RUN yarn install \
    && yarn build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /webapp/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]