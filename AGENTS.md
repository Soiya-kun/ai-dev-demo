# Development Notes

This repository contains a Turbo monorepo using npm workspaces. The root directory `my-app` houses all applications and packages.

## Workspace Layout
- `apps/api-server` – Fastify + tRPC backend
- `apps/web-client` – React client built with Vite
- `packages/trpc-config` – Shared tRPC router definitions
- `packages/db` – Prisma schema and generated client
- `packages/ui` – Reusable UI components (optional)

## Common Commands
Run these from the `my-app` directory:
- `npm run dev` – start backend and frontend with Turbo
- `npm run build` – build all workspaces
- `npm run generate` – generate Prisma client
- `docker compose build` and `docker compose up -d` – build and start containers

Ensure Node.js 20 and Docker 24 are installed.
