# My App Monorepo

This project uses npm workspaces with Turborepo to manage a full-stack TypeScript application.

## Apps
- **api-server**: Fastify + tRPC backend
- **web-client**: Vite React frontend

## Packages
- **trpc-config**: shared tRPC router
- **db**: Prisma schema and client
- **ui**: shared UI components

Run `npm run dev` from the `my-app` directory to start development.
