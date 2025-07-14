FROM golang:1.22-bookworm AS build

ENV HUGO_ENV=production

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y nodejs npm

RUN CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@v0.132.2

WORKDIR /app/website
COPY website/ /app/website

RUN npm install

RUN  hugo --minify --gc

FROM nginx:stable-alpine AS production

COPY nginx/ /etc/nginx/conf.d/
COPY --from=build /app/website/public/ /usr/share/nginx/html/
