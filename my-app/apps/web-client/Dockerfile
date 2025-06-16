FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json turbo.json ./
COPY apps/*/package*.json apps/*/
COPY packages/*/package*.json packages/*/
RUN npm ci
RUN npx turbo prune --scope=web-client --docker
COPY . .
RUN npm run build --filter=web-client

FROM nginx:alpine
COPY --from=builder /app/out/full/apps/web-client/dist /usr/share/nginx/html
EXPOSE 80
