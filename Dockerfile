# syntax=docker/dockerfile:1.6-labs

FROM node:20-bookworm-slim AS build

ARG HUGO_VERSION=0.152.2
ENV HUGO_ENV=production \
    HUGO_CACHEDIR=/root/.cache/hugo

# Base packages and Hugo (extended) binary
RUN --mount=type=cache,target=/var/cache/apt \
    --mount=type=cache,target=/var/lib/apt \
    apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl git golang-go \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL -o /tmp/hugo.tar.gz \
      https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz \
    && tar -xzf /tmp/hugo.tar.gz -C /usr/local/bin hugo \
    && rm /tmp/hugo.tar.gz \
    && hugo version

WORKDIR /src/website

# 1) Install node deps with maximum cache reuse
COPY website/package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

# 2) Copy the rest of the source
COPY website/ ./

# Ensure PostCSS binaries are discoverable when Hugo runs
ENV PATH="/src/website/node_modules/.bin:${PATH}"

# 3) Build the site with Hugo
RUN --mount=type=cache,target=/root/.cache/hugo \
    --mount=type=cache,target=/root/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    hugo --minify --gc

FROM nginxinc/nginx-unprivileged:alpine

EXPOSE 8080
USER nginx

COPY nginx/ /etc/nginx/conf.d/
COPY --from=build /src/website/public/ /usr/share/nginx/html/