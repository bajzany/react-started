FROM node:10.19.0-alpine3.9

ARG BUILD_ENV
ENV BUILD_ENV=$BUILD_ENV

ARG CI_COMMIT_BRANCH
ENV CI_COMMIT_BRANCH=$CI_COMMIT_BRANCH

RUN apk update
RUN apk add nginx supervisor gettext git openssh openssl --no-cache

COPY ./ /app
RUN rm -rf /app/build

RUN sh /app/docker/build.sh

WORKDIR /app
RUN mkdir -p /run/nginx

CMD sh /app/docker/entrypoint.sh