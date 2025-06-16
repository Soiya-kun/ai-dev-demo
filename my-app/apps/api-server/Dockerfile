# builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json turbo.json ./
COPY apps/*/package*.json apps/*/
COPY packages/*/package*.json packages/*/
RUN npm ci
RUN npx turbo prune --scope=api-server --docker
COPY . .
RUN npm run build --filter=api-server...

# runner
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/out/full/apps/api-server/dist ./dist
COPY --from=builder /app/out/full/node_modules ./node_modules
EXPOSE 4000
CMD ["node", "dist/index.js"]
