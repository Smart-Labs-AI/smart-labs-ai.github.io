FROM node:24.4.0-alpine3.22 AS build

ENV HUGO_ENV production

RUN apk upgrade --no-cache
RUN apk add --no-cache doas make git musl-dev go && \
echo 'permit :wheel' > /etc/doas.d/doas.conf

# Configure Go
ENV GOROOT /usr/lib/go
ENV GOPATH /go
ENV PATH /go/bin:$PATH

RUN mkdir -p ${GOPATH}/src ${GOPATH}/bin

RUN apk add --no-cache --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community hugo

WORKDIR /app/website
COPY website/ /app/website

RUN npm install

RUN  hugo --minify --environment production -c content --gc --quiet; exit 0

FROM nginx:stable-alpine AS production

COPY nginx/ /etc/nginx/conf.d/
COPY --from=build /app/website/public/ /usr/share/nginx/html/
